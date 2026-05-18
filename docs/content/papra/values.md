---
title: Chart default values
type: docs
weight: 3
prev: papra/install
---

| Key | Type | Default |
|-----|------|---------|
| affinity | object | `{}` |
| app.image.pullPolicy | string | `"IfNotPresent"` |
| app.image.repository | string | `"ghcr.io/papra-hq/papra"` |
| app.image.tag | string | `""` |
| app.livenessProbe.httpGet.path | string | `"/"` |
| app.livenessProbe.httpGet.port | string | `"http"` |
| app.livenessProbe.initialDelaySeconds | int | `60` |
| app.persistence.accessMode | string | `"ReadWriteOnce"` |
| app.persistence.enabled | bool | `true` |
| app.persistence.size | string | `"1Gi"` |
| app.port | int | `1221` |
| app.readinessProbe.httpGet.path | string | `"/"` |
| app.readinessProbe.httpGet.port | string | `"http"` |
| app.resources.requests.cpu | string | `"50m"` |
| app.resources.requests.memory | string | `"64Mi"` |
| baseUrl | string | `"localhost"` |
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
| ingress.tls | list | `[]` |
| nameOverride | string | `""` |
| nodeSelector | object | `{}` |
| papra.authSecret | string | `""` |
| papra.existingSecretName | string | `""` |
| papra.extraEnv | list | `[]` |
| papra.extraEnvFrom | list | `[]` |
| papra.useExistingSecret | bool | `false` |
| podAnnotations | object | `{}` |
| podLabels | object | `{}` |
| podSecurityContext | object | `{}` |
| replicaCount | int | `1` |
| securityContext | object | `{}` |
| service.port | int | `1221` |
| service.type | string | `"ClusterIP"` |
| tolerations | list | `[]` |
