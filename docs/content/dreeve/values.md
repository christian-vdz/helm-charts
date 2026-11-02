---
title: Chart default values
type: docs
weight: 3
prev: dreeve/import-data
---


| Key | Type | Default | Description |
|-----|------|---------|-------------|
| admin.username | string | `"admin"` |
| admin.passwordHash | string | `"replace-me-with-a-bcrypt-hash-of-your-password"` |
| affinity | object | `{}` |
| app.image.pullPolicy | string | `"IfNotPresent"` |
| app.image.repository | string | `"ghcr.io/dreeveapp/dreeve"` |
| app.image.tag | string | `""` |
| app.livenessProbe.exec.command[0] | string | `"curl"` |
| app.livenessProbe.exec.command[1] | string | `"-f"` |
| app.livenessProbe.exec.command[2] | string | `"http://localhost:2019/metrics"` |
| app.livenessProbe.initialDelaySeconds | int | `60` |
| app.persistence.accessMode | string | `"ReadWriteOnce"` |
| app.persistence.size | string | `"1Gi"` |
| app.port | int | `8080` |
| app.readinessProbe.httpGet.path | string | `"/"` |
| app.readinessProbe.httpGet.port | string | `"http"` |
| app.replicaCount | int | `1` |
| app.resources.requests.cpu | string | `"50m"` |
| app.resources.requests.memory | string | `"64Mi"` |
| appSecret | string | `"change-me-to-a-long-random-string"` |
| appUrl | string | `"http://localhost:8080"` |
| existingSecretName | string | `""` |
| fullnameOverride | string | `""` |
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
| ingress.host | string | `""` |
| ingress.paths[0].path | string | `"/"` |
| ingress.paths[0].pathType | string | `"Prefix"` |
| ingress.tls | list | `[]` |
| nameOverride | string | `""` |
| nodeSelector | object | `{}` |
| podAnnotations | object | `{}` |
| podLabels | object | `{}` |
| podSecurityContext | object | `{}` |
| securityContext | object | `{}` |
| service.port | int | `8080` |
| service.type | string | `"ClusterIP"` |
| strava.clientId | string | `""` |
| strava.clientSecret | string | `""` |
| strava.enabled | bool | `false` |
| strava.existingSecretName | string | `""` |
| strava.refreshToken | string | `""` |
| strava.useExistingSecret | bool | `false` |
| timezone | string | `"Europe/Paris"` |
| tolerations | list | `[]` |
| useExistingSecret | bool | `false` |
