---
sidebar_position: 5
title: Aplicaciones Populares
description: Guía para instalar aplicaciones de terceros en Goldendog.
---

# Aplicaciones Populares

Goldendog Linux respeta la libertad del usuario y las licencias de código abierto. Debido a que muchas aplicaciones populares son propietarias o tienen licencias restrictivas, no podemos incluirlas en el medio de instalación predeterminado.

Sin embargo, creemos que debe tener la libertad de instalar el software que necesite para realizar su trabajo (o jugar).

## Antigravity (por Google)

Un potente asistente de codificación agéntica. Dado que requiere un repositorio propietario, debe instalarse manualmente.

### Script de Instalación Rápida
Proporcionamos un script de ayuda para automatizar la configuración del repositorio:

```bash
curl -fsSL https://goldendoglinux.org/scripts/antigravity | bash
```

### Método Manual
1.  Agregue la clave de firma a su llavero:
    ```bash
    curl -fsSL https://us-central1-apt.pkg.dev/doc/repo-signing-key.gpg | \
      sudo gpg --dearmor --yes -o /etc/apt/keyrings/antigravity-repo-key.gpg
    ```
2.  Agregue el repositorio:
    ```bash
    echo "deb [signed-by=/etc/apt/keyrings/antigravity-repo-key.gpg] https://us-central1-apt.pkg.dev/projects/antigravity-auto-updater-dev/ antigravity-debian main" | \
      sudo tee /etc/apt/sources.list.d/antigravity.list > /dev/null
    ```
3.  Instalar:
    ```bash
    sudo apt update && sudo apt install antigravity -y
    ```

---

## Steam

La plataforma principal para jugar en Linux.

### Instalación
Steam está disponible en el repositorio `non-free` de Debian, que está habilitado por defecto en Goldendog.

```bash
sudo apt update
sudo apt install steam-installer
```

*Nota: Es posible que se le solicite habilitar el soporte para la arquitectura de 32 bits (`i386`) si aún no está habilitado.*

---

## Visual Studio Code

El popular editor de código de Microsoft.

### Script de Instalación Rápida
Proporcionamos un script de ayuda para automatizar la configuración:

```bash
curl -fsSL https://goldendoglinux.org/scripts/vscode | bash
```

### Método Manual

1.  **Agregar la clave GPG y el repositorio:**
    ```bash
    sudo apt install gpg
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
    sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
    echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
    rm -f packages.microsoft.gpg
    ```

2.  **Instalar:**
    ```bash
    sudo apt update
    sudo apt install code
    ```

---

## Spotify

El popular servicio de streaming de música.

### Script de Instalación Rápida
Proporcionamos un script de ayuda para automatizar la configuración:

```bash
curl -fsSL https://goldendoglinux.org/scripts/spotify | bash
```

### Método Manual

1.  **Agregar clave GPG y repositorio:**
    ```bash
    curl -sS https://download.spotify.com/debian/pubkey_5384CE82BA52C83A.asc | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
    echo "deb https://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
    ```

2.  **Instalar:**
    ```bash
    sudo apt update
    sudo apt install spotify-client
    ```

---

## Chrome y Otros

La mayoría de las otras aplicaciones populares (Chrome, Discord, Slack) proporcionan archivos `.deb` en sus sitios web. Puede instalarlos descargando el archivo y ejecutando:

```bash
sudo apt install ./nombre-del-archivo.deb
```
