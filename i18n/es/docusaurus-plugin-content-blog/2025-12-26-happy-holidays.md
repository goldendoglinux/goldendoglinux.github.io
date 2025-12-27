---
slug: felices-fiestas
title: Felices fiestas
authors: [alexia]
tags: [blog, news]
---

Hola a todos, aquí Alexia, esta es la mente detrás de GoldenDog Linux. En estos últimos dos años tanto en Instagram como en YouTube creo que el comentario más recurrente ha sido "¿Cuándo sale GoldenDog Linux?"

Y créanme que cada vez que veía ese comentario, pensaba: Algún día tendré que lanzar una versión pública.

Si vieron la página [Acerca de](/about) donde cuento un poco acerca de la historia de GoldenDog Linux, seguramente se darán cuenta que es un proyecto que ha estado en desarrollo durante años. ¡Muchos!

Y si bien nunca ha estado abandonado, si ha pasado por etapas donde mi atención no estuvo enfocada en él. 

En el 2023 terminé la versión 1 funcional de GoldenDog Linux. Y desde entonces la vengo usando como escritorio de uso diario en mis equipos personales.

Pasaron 2 años y he logrado recolectar muchos datos sobre que cosas me gustan, que cosas desearía cambiar y que cosas creía que podía mejorar.  

Aun dudo de hacerla publica, pero creo que ya es el momento de hacerlo. 


Posiblemente algunas de las personas que instalen GoldenDog Linux piensen: "¡Pero esto no tiene nada!" Y eso es justamente uno de los puntos más fuertes de GoldenDog Linux. 

No es una distro pensada para decidir por vos que usar, sino que te da la libertad de usar lo que quieras. 

Las ventajas más grandes son justamente las que no se ven a simple vista. Un motor robusto, un instalador versatil, un escritorio como Plasma que lleva varias decadas de desarrollo y es magnífico en cuanto a utilidad y rendimiento.

Existen proyectos que traen un montón de software preinstalado pero que cuesta mucho depurarlos de toda la basura que traen por defecto e inclusive en algunos casos, salirse del software preinstalado y agregarle aplicaciones no es tan sencillo como parece. 

Luego está el otro caso, de los proyectos hiper minimalistas, que no traen nada pero a los cuales no se les puede instalar nada con facilidad tampoco. 

Goldendog intenta ser un proyecto mucho más balanceado en ese sentido:

No trae bloat, no trae nada que no sea esencial para que el sistema funcione. Pero a la vez, ofrece la libertad de instalar lo que quieras. Y el universo de software que tiene disponible, mayormente gracias a debian, es de dimensiones astronómicas comparado con otros ecosistemas.


Pienso en mis usuarios, me gusta tratarlos como gente que no es tonta y no le gusta que le den de comer en la boca. pongo mis votos en el hecho que cualquier persona puede instalar cualquier aplicación y configurarla si se le ofrece documentación clara y detallada para lograr su objetivo. 

Así que uno de los puntos fuertes de Goldendog en los próximos meses será ese. Que la documentación sea clara y detallada para que cualquier persona pueda instalar y configurar cualquier aplicación que desee.

## La refactorización, el motor y el kernel

Goldendog 1 sufría de los mismos males que la vasta mayoría de los clones de debian del montón que andan dando vueltas por ahi. Utilizaba una iso live de debian como plataforma. Al igual que el resto. 

Son distros que parecen todas cortadas con la misma tijera. Todas usan calamares como instalador, todas traen varios GBs de aplicaciones que no le interesan a nadie, y como conté antes, limpiar la distro de todo lo que no se necesita es un trabajo arduo y tedioso. 

Goldendog 2, por otro lado, está concebida de otra forma, con otra base. A diferencia del 90% de los clones de debian no usa una live, está basada en la plataforma minimal. Ofreciendole a los usuarios un entorno limpio, robusto, sin exceso de pavadas. Te ofrece el terreno limpio y listo para que construyas lo que quieras, sin miedo a caer en *dependency hell* o problemas inherentes a incompatibilidades de cualquier índole.

Este nuevo motor de Goldendog también me permitirá cumplir un gran anhelo mío: **Goldendog Server** Algo que hace tiempo quería lograr y que la plataforma anterior simplemente no podía ofrecer.

Desde lo técnico, goldendog 1 y 2 no tienen nada en común, de hecho no se pueden actualizar de una a otra. Son motores distintos. Si conservan el mismo look and feel pero debajo del capot son motores completamente diferentes. 

Goldendog 2 trae una sesión wayland por defecto (aunque incluye x11 también) un kernel más moderno, backports por defecto, un instalador más versátil y un motor de escritorio más robusto.

Pero insisto con lo que dije antes. No quiero volcarle una carretilla de apps que a nadie le interesan sólo para que parezca más "llenita" sinó que quiero que los usuarios se encuentren con algo limpio y confiable que les permita a ellos decidir que instalar y que no. 

No tengo una fecha exacta de lanzamiento, pero todo lo "dificil" ya está listo. Ahora resta evaluarla un par de días mas, recolectar algo de feedback de las pruebas privadas en curso y luego sale. 

Algo también a destacar es que goldendog 1 llegó a ser una .iso de 7GB, y goldendog 2 es una iso de 876MB. Ha habido un cambio rotundo de visión, profesionalismo y eficiencia en el mejor de los sentidos en lo que va del camino recorrido, y espero que se vea reflejado cuando la instalen. 


¡Tengan todos ustedes unas muy felices fiestas y nos vemos el año próximo!

