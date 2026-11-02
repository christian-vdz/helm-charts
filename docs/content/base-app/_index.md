---
title: Base App
next: base-app/install
sidebar:
  open: true
---

A generic Helm chart for deploying a web application on Kubernetes, usable as a starting point for any application deployment.

## Chart features

- Deployment with a single container, plus optional sidecar and init containers
- Environment variables from literals, Secrets or ConfigMaps
- Optional liveness, readiness and startup probes
- Optional persistence (auto-created or existing PVC)
- Service exposure with Ingress or Gateway API HTTPRoute
- Helm test to verify connectivity

> [!NOTE]
> The chart ships with sensible defaults (`nginx` on port 8080). Override `image`, `containerPort`, `env` and the probes to deploy your own application.
