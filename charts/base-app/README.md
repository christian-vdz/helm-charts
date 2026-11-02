# base-app

![Version: 0.1.0](https://img.shields.io/badge/Version-0.1.0-informational?style=flat-square)

A generic Helm chart for deploying a web application on Kubernetes. Use it as a starting point for any application: override the image, environment, probes, persistence and exposure settings in your own `values.yaml`.

## Features

- Single container Deployment (sidecars and init containers optional)
- Configurable environment variables, from literals or existing Secrets/ConfigMaps
- Optional liveness, readiness and startup probes
- Optional persistence with an auto-created or pre-existing PVC
- Service, Ingress and Gateway API HTTPRoute exposure
- Helm test pod to check connectivity

## Install

`helm install my-base-app oci://ghcr.io/christian-vdz/helm-charts/base-app --version 0.1.0`

## Example

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
