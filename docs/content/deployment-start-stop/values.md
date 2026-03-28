---
title: Chart default values
type: docs
weight: 3
prev: deployment-start-stop/install
---

| Key | Type | Default |
|-----|------|---------|
| affinity | object | `{}` |
| cronjob.image.pullPolicy | string | `"IfNotPresent"` |
| cronjob.image.repository | string | `"alpine/kubectl"` |
| cronjob.image.tag | string | `""` |
| cronjob.startSchedule | string | `"0 7 * * *"` |
| cronjob.stopSchedule | string | `"0 23 * * *"` |
| cronjob.timeZone | string | `"Europe/Paris"` |
| deploymentsToScale | list | `[]` |
| fullnameOverride | string | `""` |
| imagePullSecrets | list | `[]` |
| nameOverride | string | `""` |
| nodeSelector | object | `{}` |
| podAnnotations | object | `{}` |
| podLabels | object | `{}` |
| podSecurityContext | object | `{}` |
| securityContext | object | `{}` |
| statefulSetToScale | list | `[]` |
| resources | object | `{}` |
| tolerations | list | `[]` |
