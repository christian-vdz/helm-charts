---
title: Chart installation
type: docs
weight: 1
prev: deployment-start-stop
next: deployment-start-stop/values
---

## Set values

Create `values.yaml` file.

```yaml
deploymentsToScale:
  - name: sample-app-a
    namespace: default
  - name: sample-app-b
    namespace: app-b
statefulSetToScale:
  - name: sample-app-c
    namespace: app-c
```

## Install

```sh
helm install -n default my-deployment-start-stop -f values.yaml \
  oci://ghcr.io/christian-vdz/helm-charts/deployment-start-stop --version 0.1.0
```
