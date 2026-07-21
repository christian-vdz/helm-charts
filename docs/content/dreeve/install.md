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

# Existing Strava users want "stravaApi" here, it keeps your current import behaviour.
# The default is "files".
importMode: "stravaApi"

strava:
  # Strava API credentials. Required if useExistingSecret is false.
  clientId: ""
  clientSecret: ""
  refreshToken: ""
  # Set to true to use an existing secret instead of creating a new one with the provided Strava credentials.
  useExistingSecret: false
  existingSecretName: ""

# Override default config values. See config/default.yaml for all available options.
# Athlete's birth and weight history dates are required for the app to import data from Strava.
config:
  general:
    athlete:
      firstName: 'John'
      lastName: 'Doe'
      birthday: '2000-01-01'
      # Your gender. 'M', 'F' or 'X'. Used to determine activity training load
      gender: 'M'
      weightHistory:
        "2000-01-01": 60
```

https://docs.dreeve.app/#/getting-started/installation?id=admin-password

> [!NOTE]
> The Strava `refreshToken` will be available after first login.  
> https://docs.dreeve.app/#/getting-started/installation?id=obtaining-a-strava-refresh-token

## Install

```sh
helm install -n default my-dreeve -f values.yaml \
  oci://ghcr.io/christian-vdz/helm-charts/dreeve --version 1.0.0
```
