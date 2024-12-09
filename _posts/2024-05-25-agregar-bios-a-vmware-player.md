---
layout: post
title: Agregar BIOS setup a VMWARE Workstation Player
tags: [vmware, vm, maquina virtual, virtualizacion]
author: Alexia
---

el tema con el BIOS en vmware workstation player:

El bios está, pero es inaccesible. Y no he encontrado forma alguna de hacer que esta configuración me quede por defecto aun
para cada una de las maquinas virtuales que genero.

De todos modos aquí va un simple fix:


Supongamos que tenemos una maquina virtual creada, y el directorio donde existe es ```/home/lexi/vmware/mimaquinavirtual```

vamos a ese directorio y encontraremos un archivo llamado ```mimaquinavirtual.vmx```

Ese archivo está en plain text. Lo abrimos para editarlo, vamos hacia el final y agregamos una nueva línea:

```bios.bootDelay = "10000"```

Al iniciar la maquina virtual, tendremos 10 segundos para acceder al bios, y lo mejor de todo, es que vamos a poder acceder al bios (jeje)

Esto es util para cuando queremos bootear una VM con una live .iso para reinstalarla o recuperarla.


Espero que les resulte útil! 

Besos,

Ale.
