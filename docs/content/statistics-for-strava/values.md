---
title: Chart default values
type: docs
weight: 3
prev: statistics-for-strava/import-data
---

| Key | Type | Default |
|-----|------|---------|
| affinity | object | `{}` |
| app.image.pullPolicy | string | `"IfNotPresent"` |
| app.image.repository | string | `"robiningelbrecht/strava-statistics"` |
| app.image.tag | string | `""` |
| app.livenessProbe.exec.command[0] | string | `"curl"` |
| app.livenessProbe.exec.command[1] | string | `"-f"` |
| app.livenessProbe.exec.command[2] | string | `"http://localhost:2019/metrics"` |
| app.livenessProbe.initialDelaySeconds | int | `60` |
| app.port | int | `8080` |
| app.readinessProbe.httpGet.path | string | `"/"` |
| app.readinessProbe.httpGet.port | string | `"http"` |
| app.resources.requests.cpu | string | `"50m"` |
| app.resources.requests.memory | string | `"64Mi"` |
| config.general.athlete.birthday | string | `"2000-01-01"` |
| config.general.athlete.weightHistory.2000-01-01 | int | `60` |
| fullnameOverride | string | `""` |
| gearMaintenanceConfig.enabled | bool | `false` |
| httpHost | string | `"localhost"` |
| httpRoute.annotations | object | `{}` |
| httpRoute.enabled | bool | `false` |
| httpRoute.extraHostnames | list | `[]` |
| httpRoute.parentRefs[0].name | string | `"gateway"` |
| httpRoute.parentRefs[0].sectionName | string | `"http"` |
| httpRoute.rules[0].matches[0].path.type | string | `"PathPrefix"` |
| httpRoute.rules[0].matches[0].path.value | string | `"/headers"` |
| imagePullSecrets | list | `[]` |
| ingress.annotations | object | `{}` |
| ingress.className | string | `""` |
| ingress.enabled | bool | `false` |
| ingress.extraHosts | list | `[]` |
| ingress.tls | list | `[]` |
| nameOverride | string | `""` |
| nodeSelector | object | `{}` |
| podAnnotations | object | `{}` |
| podLabels | object | `{}` |
| podSecurityContext | object | `{}` |
| replicaCount | int | `1` |
| securityContext | object | `{}` |
| service.port | int | `8080` |
| service.type | string | `"ClusterIP"` |
| strava.clientId | string | `""` |
| strava.clientSecret | string | `""` |
| strava.existingSecretName | string | `""` |
| strava.refreshToken | string | `""` |
| strava.useExistingSecret | bool | `false` |
| timezone | string | `"Europe/Paris"` |
| tolerations | list | `[]` |
