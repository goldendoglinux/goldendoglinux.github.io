---
layout: default
title: About GoldenDog (...and its Author)
permalink: /about/
---

### About GoldenDog (...And its author)

![Image](assets/images/alexia-profile.png){: style="float: left; width: 20%; height: 30%;  margin-right: 20px;"}
Todo comenzó hace bastante tiempo ya, y como una especie de broma. 

A mi solía gustarme mucho una distro Linux llamada [YellowDog Linux](https://en.wikipedia.org/wiki/Yellow_Dog_Linux), esta distro traía cosas revolucionarias, como su gestor de paquetes **YUP** (YellowDog Updater) que luego el 
mismisimo RedHat adoptó y convirtió en **YUM** (YellowDog Updater Modified) pero la gracia más linda era que **YellowDog** corria en arquitecturas **PowerPC**.

Así que una persona podía instalar YDL en una macbook antigua, en una iMac, o inclusive en una **Playstation 3**. 

#### ¿Y el Chiste donde está?

Aquí viene: En algún momento dije que iba a revivir a YellowDog pero para arquitecturas AMD64. Claramente nunca lo hice, ¿O sí?

Con el transcurso de los años la idea siempre me dió vueltas en la cabeza, hasta que un día comencé así de buenas a primeras a jugar con una .iso de CentOS 7, la desarmé y comencé a hacerle el 
debranding y demás, por que pensé: YellowDog estaba basada en RedHat, así que podría utilizar un CentOS, que era, básicamente, un RedHat gratuíto y sin licencia, y empezar a jugar y aprender allí 
con CentOS como plataforma. Esta idea no prosperó por que ninguna distro del ecosistema redhat posee mucho software, y eso hubiese significado que yo sola debía empaquetar en .rpm y mantener 
cientos de paquetes... ¡Imposible!


Por otro lado, yo tenía una idea un poco clara de lo que quería para GDL: Fundamentalmente iba a ser una estación de trabajo, y a traves de la cual se pudiera hacer practicamente todo. En cuanto a 
disponibilidad de software, algo que funcionara. Recuerdo que en algún momento comencé a decir: Quiero apretar el botón de power y que todo funcione. No quiero renegar. No quiero que sea tedioso instalar cosas. Es decir, lo empecé a pensar desde una necesidad. Mi necesidad. Quería que tuviera todo lo que generalmente necesito de un sistema para mi PC, y sin tanta vuelta.
En resúmen, la meta inicial era:

- Tener drivers para placas NVIDIA
- Poder correr Steam Linux
- Poder correr Lutris 
- Poder tener Spotify
- Poder tener Visual Studio Code y otras herramientas de desarrollo
- Poder tener todos los compilers e interpretes que utilizo, desde gcc hasta ruby.


## Debian Stable 

Algo que ya conté varias veces a lo largo de mi vida fue que he usado muy pocas distros. Mi primera distro fue slackware y luego me pasé a Debian en el 2004, más o menos. Desde el 2004 y hasta 
fines del 2019 usé Debian hasta que por motivos puntuales (estaba cursando el RHCSA) me pasé a la dupla fedora-redhat. Obvio que me duró poco por que ya en el 2023 volví a Debian y fue allí cuando 
decidí retomar una vez más el proyecto GoldenDog. 

No sabía si iba a volver a abandonarlo, pero sabía que cada vez que lo retomé llegué un poquito más lejos, así que esta vez quizáss funcionaría.

## Goldendog 1.0.0

Con esta versión comencé a organizar un poco mejor el flujo de trabajo. Si bien es un hobby, tenía que organizar mi estructura de trabajo. ¿Cual sería la mejor manera de desarrollar? ¿Donde 
guardar los archivos? ¡Tantas cosas por resolver! La mayoría de las aplicaciones y scripts que publiqué han sido generalmente muy pequeños. Relativamente faciles de corregir y expandir. 
Una distro Linux no se parece en nada a eso. Son millones de archivos, es dificil trackear y documentar todo lo que se hace. Pero necesario ya que un mínimo error puede pasar desapercibido y estallar más tarde complicando todo y no sabiendo muy bien desde donde viene.

Si hay algo que aprendí con esta versión es que confiar ciegamente en mi memoria es un error, y que debía documentar, versionar los cambios y siempre tener la forma de volver para atrás si algo no sale bien. Esto es debido a la naturaleza de la construcción de una distro.

Es decir, no se puede estar buildeando la .iso por cada cambio minusculo que hacemos. Tenemos que hacer cambios, evaluar que impacto va a tener, luego hacer otro, y luego cuando hay una serie de cambios, si buildear la .iso y testear.

## Goldendog 1.2.0 

Esta versión fue la primera en implementar un git interno, donde comencé a trabajar contra el repositorio. Sin embargo, como goldendog desarmado pesa alrededor de 20Gigas, era imposible subirlo 
todo a github. El repositorio lo tengo en un server privado en mi red local parte de mi laboratorio.


## Goldendog 1.5

Esta fue la primera versión que algunas personas por fuera de mi laboratorio de pruebas, probaron. Es la que incluye la patita como icono de arranque y la barra translucida de plasma.
Duró poco por que hice tantos patches y fixes que subió de versión a la 1.6

