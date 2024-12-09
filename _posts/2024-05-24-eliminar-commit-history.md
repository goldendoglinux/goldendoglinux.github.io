---
layout: post
title: GIT Tutorial - Eliminar el Commit History
subtitle: Como borrar todo el historial de un repositorio
tags: [git, commit, history, tutorial]
author: Alexia
---

## El tema con el historial

Generalmente borrar todo el historial de un repositorio es una muy mala idea, pero existen casos donde, por ejemplo, tenemos un blog,
o una pagina web personal, donde hemos hecho 50.000 commits durante el proceso de armado del layout y queremos organizarnos. 

¿Cómo podemos hacer para eliminar todo el historial y dejar un sólo commit con lo más reciente?


No es tan dificil como parece, les cuento:


Asumiendo que tenemos clonado el repositorio localmente y tenemos todo actualizado (por las dudas hagan ```git pull``` antes) y estamos en el directorio local, creamos una nueva rama:


```git checkout --orphan nueva_rama``` O cualquier otro nombre en lugar de nueva_rama, total es algo temporario.

Luego agregamos todos los archivos a la rama temporal que acabamos de crear:


```git add -A```


Luego realizamos un commit de los cambios:


```git commit -am "el commit de lo que estas por subir"```


Ahora eliminamos la rama ```main``` o ```master``` o como sea que se llame la rama donde queres eliminar todo

```git branch -D main```

Ahora renombramos la rama temporaria (nueva_rama) a ```main```

```git branch -m main```

Por último, pusheamos todoÑ

```git push -f origin main```

Y listo, en el repositorio, en la rama main, en este caso, no habra registros de los commits previos. 


Espero que les sirva y que hayan aprendido algo nuevo hoy!

Alexia.
