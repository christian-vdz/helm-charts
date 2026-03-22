// sync-chart-version.js (root level)
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
const packageJsonPath = path.join(chartDir, 'package.json');
const chartYamlPath = path.join(chartDir, 'Chart.yaml');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const newVersion = packageJson.version;

// Read Chart.yaml
let chartYaml = fs.readFileSync(chartYamlPath, 'utf8');

// Update version in Chart.yaml
chartYaml = chartYaml.replace(/version: .*/, `version: ${newVersion}`);

// Write updated Chart.yaml
fs.writeFileSync(chartYamlPath, chartYaml);

console.log(`Updated ${chartName}/Chart.yaml version to ${newVersion}`);
