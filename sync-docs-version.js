// sync-docs-version.js (root level)
const fs = require('fs');
const path = require('path');

// Get the chart name from command line arguments
const chartName = process.argv[2];
if (!chartName) {
  console.error('Error: Chart name argument is required.');
  process.exit(1);
}

// Paths
const chartDir = path.join(__dirname, 'charts', chartName);
const chartYamlPath = path.join(chartDir, 'Chart.yaml');
const readmePath = path.join(chartDir, 'README.md');
const docsPath = path.join(__dirname, 'docs', 'content', chartName, 'install.md');

// Read Chart.yaml
let chartYaml = fs.readFileSync(chartYamlPath, 'utf8');
const versionRegex = /version:\s*([0-9]+\.[0-9]+\.[0-9]+)/;
const appVersionRegex = /appVersion:\s*"?(v?[^"\s]+)"?/;
const versionMatch = chartYaml.match(versionRegex);
const appVersionMatch = chartYaml.match(appVersionRegex);

const newVersion = versionMatch[1];
const newAppVersion = appVersionMatch[1];

// Read README.md
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Update version badge and URL
const versionBadgeTextRegex = /!\[Version: [0-9]+\.[0-9]+\.[0-9]+\]/;
const versionBadgeUrlRegex = /\(https:\/\/img\.shields\.io\/badge\/Version-[0-9]+\.[0-9]+\.[0-9]+-informational\?style=flat-square\)/;
readmeContent = readmeContent.replace(versionBadgeTextRegex, `![Version: ${newVersion}]`);
readmeContent = readmeContent.replace(versionBadgeUrlRegex, `(https://img.shields.io/badge/Version-${newVersion}-informational?style=flat-square)`);

// Update appVersion badge and URL
const appVersionBadgeTextRegex = /!\[AppVersion: v[^\]]+\]/;
const appVersionBadgeUrlRegex = /\(https:\/\/img\.shields\.io\/badge\/AppVersion-v[^"]+-informational\?style=flat-square\)/;
readmeContent = readmeContent.replace(appVersionBadgeTextRegex, `![AppVersion: ${newAppVersion}]`);
readmeContent = readmeContent.replace(appVersionBadgeUrlRegex, `(https://img.shields.io/badge/AppVersion-${newAppVersion}-informational?style=flat-square)`);

// Update helm install command
const installCommandRegex = /helm install .* --version [0-9]+\.[0-9]+\.[0-9]+/;
const newInstallCommand = `helm install my-${chartName} oci://ghcr.io/christian-vdz/helm-charts/${chartName} --version ${newVersion}`;
readmeContent = readmeContent.replace(installCommandRegex, newInstallCommand);

// Write updated README.md
fs.writeFileSync(readmePath, readmeContent);
console.log(`Updated ${chartName}/README.md version to ${newVersion} and appVersion to ${newAppVersion}`);

// Read documentation
let docsContent = fs.readFileSync(docsPath, 'utf8');

// Update version in documentation
const docsVersionRegex = /--version \s*([0-9]+\.[0-9]+\.[0-9]+)/;
docsContent = docsContent.replace(docsVersionRegex, `--version ${newVersion}`);

// Write updated documentation
fs.writeFileSync(docsPath, docsContent);
console.log(`Updated ${chartName} documentation version to ${newVersion}`);
