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

Con el transcurso de los años la idea siempre me dió vueltas en la cabeza, hasta que un día comencé así de buenas a primeras a jugar con una .iso de CentOS 7, la desarmé y comencé a hacerle el debranding y demás,
por que pensé: YellowDog estaba basada en RedHat, así que podría utilizar un CentOS, que era, básicamente, un RedHat gratuíto y sin licencia, y empezar a jugar y aprender allí con CentOS como plataforma.


Pasó el tiempo y se me complicaba mucho manipular bien Anaconda, el script que había hecho en kickstart no estaba mal pero tampoco terminaba de cerrarme, así que lo abandoné al proyecto, pero lo que rescato de esos pocos días donde me puse a hacer un rebuild de CentOS fue que aprendí mucho acerca de como desarmar una .iso, desarmar una imagen de initramfs, y como reconstruirlas, obvio. 

Me familiaricé un poquito con el firmado de paquetes de software y construí algunos .rpm para la distro.


### RockyLinux

Pasaron unos cuantos años del primer intento. Cada tanto me agarraban ganas de volver a encarar un proyecto así. Pero para este entonces ya CentOS había caducado y CentOS stream no era stable. Así que busqué alternativas gratuítas
a RHEL y así fue como dí con RockyLinux. 

El primer rebuild de GoldenDog lo hice sobre RockyLinux, y funcionó. Logré instalarle plasma vía EPEL, y más o menos quedó, pero ahí me encontré con otro problema: Que los sistemas de la familia RedHat no tienen tanto software.

Yo necesitaba drivers de video para mi sistema, quería que minimamente pudiera realizar las siguientes tareas:

- Tener drivers para placas NVIDIA
- Poder correr Steam Linux
- Poder correr Lutris 
- Poder tener Spotify
- Poder tener Visual Studio Code y otras herramientas de desarrollo
- Poder tener todos los compilers e interpretes que utilizo, desde gcc hasta ruby.

Más o menos esa era la meta inicial, y con RockyLinux se hacía dificil lograrlo.

Después, por otros motivos totalmente ajenos a GoldenDog (Estaba buscando material para hacer un video sobre OpenELA para mi [Canal de Youtube](https://youtube.com/@lachicadesistemas), terminé conociendo a la gente de rockylinux 
y me invitaron a unirme al proyecto.


## Debian Stable

Yo, que venía de usar fedora y me resultaba muy tedioso tener un sistema útil que pudiera correr todo lo que necesitaba. Terminaba compilando mucho software a mano, haciendo scripts para suplir cosas que fedora no resolvía de una manera eficiente, y bueno, el cansancio me ganó y volví a Debian, que fue, luego de Slackware, el sistema que más he utilizado.

Así que de repente un día pensé: ¿Y si hago GoldenDog pero arriba de Debian?  Y así un fin de semana me puse, es más creo que arranqué una tarde con el rebuild y al otro día ya tenía una .iso más o menos funcional. El resto han sido rebuilds consecutivos corrigiendo cosas, agregandole software y demás.

En algún momento cometí un error grave y cambié todos los permisos de mi directorio de build, y arruiné la distro básicamente. Empecé a tener errores de permisos en todos lados y allí entendí que era un proyecto muchísimo más grande que cualquier otro en el que estuve anteiormente. Generalmente el software que escribo son scripts sencillos, o aplicaciones muy pequeñas, tengo mucho control y es facil seguirle el hilo, pero esto son miles y miles de archivos y un cambio involuntario puede ser caótico. En fin, comencé a revisar directorio por directorio, comparando los permisos contra un debian stable puro, y fui corrigiendo las root uids, y demás. Fue un trabajo muy tedioso pero logré recuperar el directorio de build. 

Ahí también comencé a implementar un sistema de versionado de cambios (git) por que ya se me estaba yendo de las manos la cosa, y también un sistema de tickets internos para poder llevar un registro preciso de la cantidad de cosas que se van haciendo y completando, lo que falta resolver y demás, con tags del estilo "bug" "feature" "improvement" etc

