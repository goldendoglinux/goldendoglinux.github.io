---
sidebar_position: 5
title: Aplicaciones Populares
description: Guía para instalar aplicaciones de terceros en Goldendog.
---

# Aplicaciones Populares

Goldendog Linux respeta la libertad del usuario y las licencias de código abierto. Debido a que muchas aplicaciones populares son propietarias o tienen licencias restrictivas, no podemos incluirlas en el medio de instalación predeterminado. 

Sin embargo, creemos que debe tener la libertad de instalar el software que necesite para realizar su trabajo (o jugar).

## Visual Studio Code (por Microsoft)

Se puede instalar un paquete _helper_ de GoldenDog Linux para automatizar la instalación de Visual Studio Code.

```sudo apt install vscode-installer-helper```

Una vez instalado, ejecute:

```sudo vscode-installer```

Esto importará el repositorio de Microsoft, la clave de firma e instalará Visual Studio Code.

Puede iniciar Visual Studio Code desde el menú de Plasma o ejecutando `code` en una terminal.

:::info
Visual Studio Code es un producto de Microsoft. Este paquete helper no está respaldado por Microsoft y no modifica el producto bajo ningún concepto. No estamos afiliados con Microsoft y no tocamos el producto Visual Studio Code.
:::
