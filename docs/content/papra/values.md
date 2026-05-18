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
| app.port | int | `1221` |
| app.resources.requests.cpu | string | `"50m"` |
| app.resources.requests.memory | string | `"64Mi"` |
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
| podAnnotations | object | `{}` |
| podLabels | object | `{}` |
| podSecurityContext | object | `{}` |
| replicaCount | int | `1` |
| securityContext | object | `{}` |
| service.port | int | `1221` |
| service.type | string | `"ClusterIP"` |
| papra.authSecret | string | `""` |
| papra.existingSecretName | string | `""` |
| papra.useExistingSecret | bool | `false` |
| tolerations | list | `[]` |
