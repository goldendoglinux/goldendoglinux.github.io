---
layout: post
title: Nueva Vulnerabilidad en GLIBC afecta servidores sirviendo contenido PHP
subtitle: Como patchear manualmente
tags: [glibc, cve, patch]
author: Alexia
---

## Esta guía es temporal y para servidores basados en DEBIAN.

El viernes pasado salio el [CVE-2024-2961](https://nvd.nist.gov/vuln/detail/CVE-2024-2961)

Se detectó un problema con el charset **ISO-2022-CN-EXT** que permite ejecutar código arbitrario vía php y tomar control de un server. 
Esto afecta a la mayoría de las versiones de glibc sin el fix instalada en servidores que estén sirviendo contenido php.

Al momento de redactar este artículo, Debian aún no sacó un paquete para Debian 12 Stable con el fix.



Verificar si tenemos la versión con problemas:

```
iconv -l | grep -E 'CN-?EXT'
```

Si no tira output. Está todo bien. Si, por el contrario, el output es:

```
ISO-2022-CN-EXT//
ISO2022CNEXT//
```

Se debe actualizar la versión de glibc con fix (no disponible al momento de escribir esto en debian 12 stable, al menos)

O bien se pueden desabilitar los character sets afectados:


editar gconv-modules-extra.conf 
``` en /usr/lib/x86_64-linux-gnu/gconv/ ```

Comentar o eliminar las siguientes entradas (A partir de la línea 1254)

```
#       from                    to                      module          cost
alias   ISO2022CNEXT//          ISO-2022-CN-EXT//
module  ISO-2022-CN-EXT//       INTERNAL                ISO-2022-CN-EXT 1
module  INTERNAL                ISO-2022-CN-EXT//       ISO-2022-CN-EXT 1
```

luego correr ``` iconvconfig ``` para resetear la cache de iconv

Una vez finalizado, volver a verificar con el comando que corrimos primero:


```
iconv -l | grep -E 'CN-?EXT'
```

Si no tira output. El servidor quedó asegurado contra esta vulnerabilidad.

¡Saludos!


