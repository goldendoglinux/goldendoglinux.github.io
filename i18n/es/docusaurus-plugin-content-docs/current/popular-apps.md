---
sidebar_position: 5
title: Aplicaciones Populares
description: Guía para instalar aplicaciones de terceros en Goldendog.
---

# Aplicaciones Populares

Goldendog Linux respeta la libertad del usuario y las licencias de código abierto. Debido a que muchas aplicaciones populares son propietarias o tienen licencias restrictivas, no podemos incluirlas en el medio de instalación predeterminado. 

Sin embargo, creemos que debe tener la libertad de instalar el software que necesite para realizar su trabajo (o jugar).

## Antigravity (por Google)

Se puede instalar un paquete _helper_ de GoldenDog Linux para instalar Antigravity. 

```sudo apt update && sudo apt install antigravity-installer```

El paquete _helper_ configurará el repositorio de Google e instalará Antigravity automáticamente. Tenga en cuenta que el proceso puede tardar aproximadamente un minuto en conexiones lentas. Espere a la notificación de escritorio. Puede confirmar que está instalado escribiendo:

```sudo dpkg -l | grep antigravity```

:::info
 Antigravity es un producto de Google y, como tal, está sujeto a los términos de servicio de Google. Al usar Antigravity, usted acepta los términos de servicio de Google. Este paquete ni es oficial ni está respaldado por Google y no modifica el producto bajo ningún concepto.
