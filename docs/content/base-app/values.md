---
title: Chart default values
type: docs
weight: 3
prev: base-app/install
---

| Key | Type | Default |
|-----|------|---------|
| affinity | object | `{}` |
| args | list | `[]` |
| command | list | `[]` |
| containerPort | int | `8080` |
| env | list | `[]` |
| envFrom | list | `[]` |
| extraContainers | list | `[]` |
| extraVolumeMounts | list | `[]` |
| extraVolumes | list | `[]` |
| fullnameOverride | string | `""` |
| httpRoute.annotations | object | `{}` |
| httpRoute.enabled | bool | `false` |
| httpRoute.hostnames | list | `[]` |
| httpRoute.parentRefs[0].name | string | `"gateway"` |
| httpRoute.parentRefs[0].sectionName | string | `"http"` |
| httpRoute.rules[0].matches[0].path.type | string | `"PathPrefix"` |
| httpRoute.rules[0].matches[0].path.value | string | `"/"` |
| image.pullPolicy | string | `"IfNotPresent"` |
| image.repository | string | `"nginx"` |
| image.tag | string | `""` |
| imagePullSecrets | list | `[]` |
| ingress.annotations | object | `{}` |
| ingress.className | string | `""` |
| ingress.enabled | bool | `false` |
| ingress.extraHosts | list | `[]` |
| ingress.host | string | `""` |
| ingress.paths[0].path | string | `"/"` |
| ingress.paths[0].pathType | string | `"Prefix"` |
| ingress.tls | list | `[]` |
| initContainers | list | `[]` |
| nameOverride | string | `""` |
| nodeSelector | object | `{}` |
| persistence.accessMode | string | `"ReadWriteOnce"` |
| persistence.enabled | bool | `true` |
| persistence.existingClaim | string | `""` |
| persistence.mountPath | string | `"/data"` |
| persistence.size | string | `"1Gi"` |
| persistence.storageClass | string | `""` |
| persistence.subPath | string | `""` |
| podAnnotations | object | `{}` |
| podLabels | object | `{}` |
| podSecurityContext | object | `{}` |
| probes.liveness | object | `{}` |
| probes.readiness | object | `{}` |
| probes.startup | object | `{}` |
| replicaCount | int | `1` |
| resources | object | `{}` |
| securityContext | object | `{}` |
| service.annotations | object | `{}` |
| service.port | int | `8080` |
| service.type | string | `"ClusterIP"` |
| serviceAccountName | string | `""` |
| tolerations | list | `[]` |
