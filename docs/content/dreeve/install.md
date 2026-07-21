---
title: Chart installation
type: docs
weight: 1
prev: dreeve
next: dreeve/import-data
---

## Prerequisites

See https://docs.dreeve.app/#/getting-started/prerequisites

## Required values

Create `values.yaml` file.

```yaml
# Used to sign the admin session cookie. Set it to any long random string.
appSecret: ""

admin: 
  username: "admin"
  passwordHash: ""
```

### Admin Password Hash

Generate with htpasswd

```sh
htpasswd -bnBC 12 "" my-secure-password | cut -d : -f 2
```

or see:
https://docs.dreeve.app/#/getting-started/installation?id=admin-password

## Install

```sh
helm install -n default my-dreeve -f values.yaml \
  oci://ghcr.io/christian-vdz/helm-charts/dreeve --version 1.0.0
```
