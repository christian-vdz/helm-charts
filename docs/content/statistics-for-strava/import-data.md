---
title: Import data and build statistics
type: docs
weight: 2
prev: statistics-for-strava/install
---

Once you have successfully authenticated with Strava, you can import your data and build the html files, after which you can view your statistics.

```sh
kubectl -n default exec deployments/statistics-for-strava -- bin/console app:strava:import-data
kubectl -n default exec deployments/statistics-for-strava -- bin/console app:strava:build-files
```

> [!WARNING]
> Data import from Strava can take a while, be patient.
