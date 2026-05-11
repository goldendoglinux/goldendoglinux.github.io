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

```bash
sudo apt update
sudo apt install antigravity-installer
```

The helper will configure the Google repository and install Antigravity. Automatically. Be mindful that the process may take about a minute on slow connections. Wait for the desktop notification. You may confirm it is installed by typing:

```bash
sudo dpkg -l | grep antigravity
```

:::info
Antigravity is a Google product, and as such, it is subject to Google's terms of service. By using Antigravity, you agree to Google's terms of service. This helper is not endorsed by Google and does not modify the product in any way.
:::

## Visual Studio Code (by Microsoft)

A Goldendog Linux helper package can be installed to automate the installation of Visual Studio Code.

```bash
sudo apt install vscode-installer-helper
```

Once installed, run:

```bash
sudo vscode-installer
```

This will import the Microsoft repository, the signing key, and install Visual Studio Code.

You can start Visual Studio Code from the Plasma menu or by running `code` in a terminal.

:::info
Visual Studio Code is a Microsoft product. This helper is not endorsed by Microsoft and does not modify the product in any way. We are not affiliated with Microsoft and do not touch Visual Studio Code's product.
:::

