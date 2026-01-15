---
sidebar_position: 5
title: Popular Apps
description: Guide to installing third-party applications on Goldendog.
---

# Popular Applications

Goldendog Linux respects user freedom and open-source licenses. Because many popular applications are proprietary or have restrictive licenses, we cannot include them in the default installation media. 

However, we believe you should have the freedom to install whatever software you need to get your work (or gaming) done.

## Antigravity (by Google)

A GoldenDog Linux helper package can be installed to install Antigravity. 

```sudo apt update && sudo apt install antigravity-installer```

The helper will configure the Google repository and install Antigravity. Automatically. Be mindful that the process may take about a minute on slow connections. Wait for the desktop notification. You may confirm it is installed by typing:

```sudo dpkg -l | grep antigravity```

NOTICE: Antigravity is a Google product, and as such, it is subject to Google's terms of service. By using Antigravity, you agree to Google's terms of service. This helper is not endorsed by Google and does not modify the product in any way.

