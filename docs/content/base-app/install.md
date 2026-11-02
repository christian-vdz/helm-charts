---
title: Chart installation
type: docs
weight: 1
prev: base-app
next: base-app/values
---

## Set values

Create `values.yaml` file.

```yaml
image:
  repository: ghcr.io/my-org/my-app
  tag: "1.4.2"

containerPort: 3000

env:
  - name: NODE_ENV
    value: production

envFrom:
  - secretRef:
      name: my-app-secret

probes:
  readiness:
    httpGet:
      path: /readyz
      port: http

persistence:
  enabled: true
  size: 5Gi

ingress:
  enabled: true
  host: my-app.example.com
  className: nginx
```

## Install

```sh
helm install -n default my-base-app -f values.yaml \
  oci://ghcr.io/christian-vdz/helm-charts/base-app --version 0.1.0
```
