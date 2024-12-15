---
layout: default
title: Acerca de GoldenDog (...Y su Autora)
permalink: /about/
---

### Acerca de GoldenDog (Y su Autora)

![Image](assets/images/alexia-profile.png){: style="float: left; width: 20%; height: 30%;  margin-right: 20px;"}
Todo comenzó hace bastante tiempo ya, y como una especie de broma. 

Decidí tomarme el tiempo para poder escribir algunas memorias en primera persona y también, del mismo modo, contarles un poco acerca del proyecto. Se que es una forma bastante informal de redactar un _**About**_ pero al mismo 
tiempo consideré que a veces en la informalidad logramos acercarnos más como comunidad. Así que ¡Comencemos!


A mi solía gustarme mucho una distro Linux llamada [YellowDog Linux](https://en.wikipedia.org/wiki/Yellow_Dog_Linux), esta distro traía cosas revolucionarias, como su gestor de paquetes **YUP** (YellowDog Updater) que luego el 
mismisimo RedHat adoptó y convirtió en **YUM** (YellowDog Updater Modified) pero la gracia más linda era que **YellowDog** corria en arquitecturas **PowerPC**.

Así que una persona podía instalar YDL en una macbook antigua, en una iMac, o inclusive en una **Playstation 3**. 

#### ¿Y el chiste donde está?

Aquí viene: En algún momento dije que iba a revivir a YellowDog pero para arquitecturas AMD64. Claramente nunca lo hice, ¿O sí?

Siempre tuve interés en hacer algo relacionado con **YellowDog** y como la distro original estaba basada en **RHEL**, decidí un día comenzar a probar en mi laboratorio la posibilidad de utilizar **CentOS** Como plataforma.

El primer problema con CentOS fué que no poseía mucho software para escritorio, que era la finalidad de este _pseudo proyecto_, así que decidí abandonar la idea, y más adelante la retomé pero utilizando **Debian** como plataforma.


## ¿Por qué se llama GoldenDog?

Bueno, justamente por que la idea original era revivir _**YellowDog**_ pero, aun en el 2024, **YellowDog Linux** continúa siendo una marca registrada, a pesar de que el proyecto ha sido discontinuado hace más de una década. Y 
como en el momento que yo decidí construir la distro, yo tenía de mascota una perra _Golden Retriever_, se me ocurrió "Golden" por mi perra que era casi igual a yellow, y de paso lograba hacer el guíño a YellowDog y también homenajear a mi perrita que era como una hija para mí. --Desafortunadamente falleció en el 2021 y la extraño muchísimo.


## Los objetivos iniciales de GoldenDog

La idea siempre fue que GoldenDog fuera una _**Workstation**_. Ya existen varias (excelentes) distros para servidores, incluída Debian Stable, la cual utilicé para construir GDL. Pero hay otras, como RHEL, RockyLinux, Ubuntu 
LTS, Oracle Linux, y Suse Enterprise Linux, entre otras. Pero GoldenDog era la distro que yo quería para el uso que yo le doy a una estación de trabajo. Fue pensada 100% desde mi necesidad. Por que nunca la pensé desde el lado 
del ego, de decir: "Miren, hice una distro", sinó que el proyecto nació como algo personal, privado y sin mucha intención de distribuirla.

Claro que una cosa es modificar un Debian para uso personal y otra cosa muy distinta es empaquetar el respin como una .iso instalable. Es un gran aprendizaje. 

Y no sólo se trata de desarrollar el software, o los scripts, sino que también se trata de algo mucho más profundo, como diseñar el flujo de trabajo, la infraestructura, administrar los recursos y aprovecharlos al máximo, por 
que, en proyectos tan pequeños como este, el dinero no sobra. Así que además de sentarse a reconstruir la iso de debian con unsquashfs, la cuestión también pasaba sobre como sería la mejor manera de documentar, crear issues, versionar cambios, etcétera. ¿A donde hostearía la .iso? ¿Cuanto cuesta un servicio así? ¿Que alternativas gratuitas existen? ¿Son confiables?

Sabía a grandes razgos que necesitaría un sitio web, un **CDN** y un servidor de git. También sabía que si empaquetaría mis propios .deb necesitaría crear un repositorio, ¿Arriba de un apache2 o NGINX? ¿En una VM en la nube? 
Muchas cosas para resolver.

Algunas de estas cosas ya las fuí resolviendo y otras aun resta resolver, pero la cuestión más importante es y ha sido: No permitir que el proyecto me desborde, me queme y me aburra.

Por que soy la única persona a cargo de todo, y siempre y cuando lo pueda hacer en mi tiempo libre junto con los diferentes voluntariados y actividades que realizo por fuera de mi horario laboral (Tengo un trabajo full time de lunes a viernes), todo bien. Es por eso que la regla de oro ha sido siempre para mi **Trabajar en algo relacionado con GoldenDog sólo cuando tengo ganas y energía**


## Las metas técnicas iniciales

GoldenDog necesitaba tener toda la robustez y estabilidad de un **Debian** pero además, toda la disponibilidad de software que una persona que desea programar, editar audio y video, jugar videojuegos en steam, pudiera llegar a 
necesitar. 

- Drivers de video, especialmente para placas AMD y NVIDIA 
- Steam Linux 
- Lutris 
- Spotify 
- Visual Studio Code y otras herramientas de desarrollo 
- Todos los compilers e interpretes que se utilicen en la actualidad.

Hoy 2024, Goldendog cuenta con una gran serie de programas preinstalados y otros tantos que se pueden instalar sin vueltas desde APT.

Entre las cosas instaladas trae pip, npm, ruby gems, gcc, gmake, python3, bash, vim, nano, visual studio code y un sin fin mas que ahora no recuerdo pero que seguramente están en el changelog en algún lado.

En estos últimos dias he estado haciendo cosas en Golang, así que tengo pensado incluir Go en futuras versiones o, al menos, un script de instalación remoto, como los que hice para steam y spotify, ya que
son aplicaciones que considero opcionales, pero útiles. 


## El futuro de GoldenDog

Por ahora el único plan concreto es terminar de llevar el desarrollo a un lugar donde me sienta comoda lanzandolo de manera pública. 
No pretendo que sea una gran distro ni mejor que ninguna otra, ya de antemano se que no es mejor que otras distros. Existen distros con mucha mayor documentación, financiamiento, comunidad, etc. 

Esto es un proyecto muy pequeño y aun en formación.

Lo que sí tiene de bueno GoldenDog es como está planteada: 

Por ejemplo, si se instala hoy, tiene soporte hasta debian 14. Y probablemente en el interín saque un patch para darle soporte para muchas versiones de debian más. 
Esto permite que una persona que instale GoldenDog hoy pueda continuar actualizandolo de versión sin reinstalar. 

Esto es sólo posible por que los releases de goldendog están atados a los releases de Debian Stable y todo eso ya está automatizado. 

Lo malo que tiene hoy goldendog es que aun no cuento con equipos de voluntarios e infraestructura para poder crear distintos grupos de trabajo como seguridad, testing, etcetera. Fundamentalmente por que tampoco dispongo de mucho 
tiempo libre, y en cierta forma, como esto es un hobby para mi, me agrada el hecho de poder ir trabajando de a poco en esto cuando tengo un momento libre.


Considero que la versión actual, 1.6.20, está bastante utilizable. Es la que utilizo yo a diario y desde la cual estoy redactando esta nota. Lo que pasa es que si surge algún inconveniente, como yo la conozco, la puedo reparar 
de manera sencilla y relativamente rápido, pero también se que no hay dos personas en este mundo que operen con un sistema de la misma manera. Entiendo que mi forma de utilizar Linux es muy distinta a la de otras personas y 
quizás existen bugs que se me pasan por alto por que no utilizo el sistema de esa forma. Por ejemplo, en una versión temprana de la distro había un bug en el dialogo de instalación de software. Algo que se me pasó totalmente 
inadvertido por que yo instalo software exclusivamente desde la terminal.

Ejemplos así tengo varios.

No tengo la capacidad técnica o institucional de ponerle una fecha concreta de lanzamiento. decir lo contrario sería mentirles. Lo que si puedo hacer y a lo que si me comprometo, es a terminar este sitio web en el transcurso de 
las próximas semanas, y diseñar un nuevo roadmap donde ustedes podrán observar que le falta, y por donde vamos yendo.

Sería una irresponsabilidad enorme de mi parte lanzar un producto que no considero que está listo, por más que sea gratuito, y por más que sea un debian bonito, lo que realmente deja muy poco margen para bugs y problemas.

Por más que sea un proyecto pequeño y sencillo, que no busca ser mejor que ninguna otra distro ni reemplazar a ninguna, considero que debo mantener el profesionalismo presente siempre.

No quiero irme muy por las ramas con este texto, aunque si espero que haya podido aclarar una gran cantidad de dudas. 


## Por que no acepto donaciones de infraestructura de particulares

Esto es algo que decidí centralizar aquí también para evacuar dudas. Varias personas me han ofrecido hosting en sus raspberries o equipos caseros. Y se los agradezco de corazón. 

Lo que goldendog necesita es sponsorship corporativo, en realidad. Alguna institución o empresa que pudiera donar dinero o los recursos de infraestructura que me faltan, pero tiene que ser algo sustentable en el tiempo.

No me sirve una maquina virtual de pruebas por tres meses, es más tediosa la configuración que el uso que le puedo dar. Necesito un mínimo de 3 años de infraestructura para poder planificar correctamente y esto es algo que sólo
puede financiar una empresa y no un particular.

Al mismo tiempo, alguien que estuviera dispuesta/o a financiar el proyecto a través de una institución o empresa, probablemente desee ver datos concretos del desarrollo, es por eso que considero, para garantizar la honestidad y 
la transparencia, que primero es mejor arreglarme con lo que tengo, traer resultados concretos, y luego veremos.


Ahora si me voy. Les mando un gran saludo y gracias por tomarse el tiempo de leer estas palabras.


Alexia
