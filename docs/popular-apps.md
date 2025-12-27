---
sidebar_position: 5
title: Popular Apps
description: Guide to installing third-party applications on Goldendog.
---

# Popular Applications

Goldendog Linux respects user freedom and open-source licenses. Because many popular applications are proprietary or have restrictive licenses, we cannot include them in the default installation media. 

However, we believe you should have the freedom to install whatever software you need to get your work (or gaming) done.

## Antigravity (by Google)

A powerful agentic coding assistant. Since it requires a proprietary repository, it must be installed manually.

### One-Line Install Script
We provide a helper script to automate the repository setup:

```bash
curl -fsSL https://goldendoglinux.org/scripts/antigravity | bash
```

### Manual Method
1.  Add the signing key to your keyring:
    ```bash
    curl -fsSL https://us-central1-apt.pkg.dev/doc/repo-signing-key.gpg | \
      sudo gpg --dearmor --yes -o /etc/apt/keyrings/antigravity-repo-key.gpg
    ```
2.  Add the repository:
    ```bash
    echo "deb [signed-by=/etc/apt/keyrings/antigravity-repo-key.gpg] https://us-central1-apt.pkg.dev/projects/antigravity-auto-updater-dev/ antigravity-debian main" | \
      sudo tee /etc/apt/sources.list.d/antigravity.list > /dev/null
    ```
3.  Install:
    ```bash
    sudo apt update && sudo apt install antigravity -y
    ```

---

## Steam

The premier platform for gaming on Linux.

### Installation
Steam is available in the Debian `non-free` repository, which is enabled by default in Goldendog.

```bash
sudo apt update
sudo apt install steam-installer
```

*Note: You may be prompted to enable 32-bit architecture (`i386`) support if it isn't already enabled.*

---

## Visual Studio Code

Microsoft's popular code editor.

### One-Line Install Script
We provide a helper script to automate the setup:

```bash
curl -fsSL https://goldendoglinux.org/scripts/vscode | bash
```

### Manual Installation

1.  **Add the GPG Key and Repository:**
    ```bash
    sudo apt install gpg
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
    sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
    echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
    rm -f packages.microsoft.gpg
    ```

2.  **Install:**
    ```bash
    sudo apt update
    sudo apt install code
    ```

---

## Spotify

The popular music streaming service.

### One-Line Install Script
We provide a helper script to automate the setup:

```bash
curl -fsSL https://goldendoglinux.org/scripts/spotify | bash
```

### Manual Installation

1.  **Add GPG Key and Repository:**
    ```bash
    curl -sS https://download.spotify.com/debian/pubkey_5384CE82BA52C83A.asc | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
    echo "deb https://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
    ```

2.  **Install:**
    ```bash
    sudo apt update
    sudo apt install spotify-client
    ```

---

## Chrome & Others

Most other popular applications (Chrome, Discord, Slack) provide `.deb` files on their websites. You can install them by downloading the file and running:

```bash
sudo apt install ./name-of-file.deb
```
