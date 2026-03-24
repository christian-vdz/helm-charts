---
title: Chart installation
type: docs
weight: 1
prev: statistics-for-strava
next: statistics-for-strava/import-data
---

## Prerequisites

See https://statistics-for-strava-docs.robiningelbrecht.be/#/getting-started/prerequisites

## Required values

Create `values.yaml` file.

```yaml
strava:
  clientId: ""
  clientSecret: ""
  refreshToken: ""

# Override default config values. See config/default.yaml for all available options.
# Athlete's birth and weight history dates are required for the app to import data from Strava.
config:
  general:
    athlete:
      birthday: '2000-01-01'
      weightHistory:
        "2000-01-01": 60
```

> [!NOTE]
> The Strava `refreshToken` will be available after first login.  
> https://statistics-for-strava-docs.robiningelbrecht.be/#/getting-started/installation?id=obtaining-a-strava-refresh-token

## Install

```sh
helm install -n default my-statistics-for-strava -f values.yaml \
  oci://ghcr.io/christian-vdz/helm-charts/statistics-for-strava --version 0.2.5
```
