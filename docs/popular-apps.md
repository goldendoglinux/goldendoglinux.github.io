---
sidebar_position: 5
title: Popular Apps
description: Guide to installing third-party applications on Goldendog.
---

# Popular Applications

Goldendog Linux respects user freedom and open-source licenses. Because many popular applications are proprietary or have restrictive licenses, we cannot include them in the default installation media. 

However, we believe you should have the freedom to install whatever software you need to get your work (or gaming) done.

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

