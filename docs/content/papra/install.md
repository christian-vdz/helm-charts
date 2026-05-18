---
title: Chart installation
type: docs
weight: 1
prev: papra
next: papra/values
---

## Prerequisites

See https://docs.papra.app/self-hosting/using-docker/#prerequisites

## Required values

Create `values.yaml` file.

```yaml
papra:
  # Papra Auth Secret. Required if useExistingSecret is false.
  authSecret: ""
  # Set to true to use an existing secret instead of creating a new one with the Auth Secret.
  useExistingSecret: false
  existingSecretName: ""
```

## Install

```sh
helm install -n default my-papra -f values.yaml \
  oci://ghcr.io/christian-vdz/helm-charts/papra --version 0.2.1
```
