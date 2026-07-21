---
title: Import data and build statistics
type: docs
weight: 2
prev: dreeve/install
---

Once you have successfully authenticated with Strava or that you have uploaded your files, you can import your data and build the html files, after which you can view your statistics.

```sh
# In stravaApi mode
kubectl -n default exec deployments/dreeve -- bin/console app:cron:run-strava-import --import --build

# In files mode
kubectl -n default exec deployments/dreeve -- bin/console app:cron:run-file-import --import --build
```

> [!WARNING]
> Data import from Strava can take a while, be patient.
