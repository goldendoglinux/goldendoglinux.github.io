---
layout: post
title: Developer News
subtitle: Diciembre 2024
gh-repo: alexiarstein/bash
gh-badge: [star, fork, follow]
tags: [test]
comments: true
author: Alexia
---


Hola como están, aquí Alexia, la creadora de GoldenDog. 

He estado recibiendo muchísimos mensajes y correos electrónicos desde ue he estado comentando en mi canal de youtube cosas relacionadas con GoldenDog. 

Es por eso que decidí hacer algunas cositas:


1. Estoy actualizando el sitio. Completamente. Literal, hice un backup del anterior, elimine el proyecto, lo rehice bajo el mismo nombre y estoy codeando el sitio desde cero.

2. Continúo trabajando en el desarrollo de GDL. Estamos en la version 1.6.20 en este momento.


Ahora si, paso a contarles un poquito acerca de las noticias:


### ¿Por qué no está disponible GoldenDog aun? 

Por varios motivos. El principal: _**Infraestructura**_. 


Paso a explicar:

Para encarar un proyecto serio, se requiere planificar la infraestructura donde montar todos los aspectos del proyecto. Algunos de los elementos son un servidor de git, servicio de correo y maquinas virtuales para pruebas
Luego podemos extendernos un poco más y tener un foro, un bug tracker, etcetera.

Todo esto cuesta mucho dinero.

la .iso de goldendog pesa en promedio 5G, es virtualmente imposible hostearla en github. mi plan gratuito actual sólo me da 1gb de transferencia mensual. Así que tampoco es viable para conectar goldendog al sistema de 
parches por que con que unos cientos de usuarios con goldendog actualicen su sistema en simultaneo, ya me dejan sin ancho de banda durante el resto del mes. 

Esta funcionalidad de goldendog es necesaria por que si alguien detecta un bug crítico, me permite patchearlo desde aquí y se aplica a todos los sistemas que deseen aplicar el patch. 

Para lograrlo, necesito un servidor GIT propio, o el plan corporativo de github. En ambos casos, esto cuesta dinero.

En resúmen, lo que realmente necesito es, en el fondo, financiación. Pero no financiación de particulares. Más alla que las donaciones individuales son nobles y ayudan mucho al proyecto, lo que realmente haría la diferencia,
sería que una empresa quiera apadrinar goldendog e invierta en los costos de infraestructura durante un mínimo de dos años, para garantizar que el proyecto pueda sostenerse.

A grandes rasgos, estimando un costo mensual promedio de 100 dolares, se necesita una inversión de 2400 dolares para poder armar una infraestructura medianamente decente por un lapso de 2 años. Es dinero que yo hoy no puedo abocar al proyecto de mi propio bolsillo.


El segundo motivo es: **Es un proyecto personal**

Esto significa que es algo que desarrollo por vocación. Con gusto, con alegría. No me gustaría que se convirtiera en un trabajo no pago. 

Por eso no sólo quiero tomarme el tiempo que sea para hacer un producto genuino y cuidado, sinó también quiero que me resulte placentero todo este recorrido. 

Yo comencé mi carrera en sistemas desarrollando software, luego me pasé a operaciones por que codeando la pasaba muy mal, era muy ingrato. La gente no quería pagar, o pedían más cosas que las acordadas. 
Ser freelancer no era tan lindo como suena, al menos hace 20 años atrás.

Me dejó un sabor muy amargo y al día de hoy he aceptado muy pocos trabajos de desarrollo por este motivo. 


GoldenDog es mi primer proyecto grande en muchísimos años que involucra un montón de cosas que me encantan: Desarrollo, diseño, implementación, investigación, etcetera. 

La verdad es que la versión actual está mas que bien para utilizarse. Es la que utilizo a diario y no le encuetro bugs, pero, aquí esta la cuestión: Si le encuentro algo, lo corrijo y sigo. 
A un usuario común no puedo darle un producto así. Si un usuario encuentra un problema, y lo reporta, fantastico, me da la posibilidad de encontrarle una solución.

Hace algunos meses intenté armar un equipo de testing, algunas personas descargaron goldendog y reportaron bugs, pero otras lo descargaron, lo instalaron y se desentendieron. 

Eso me puso muy triste, por que la idea no era que descarguen goldendog para probarlo, sino para reportar bugs. De todo ese primer grupo de testers, muy pocos se tomaron la tarea en serio. 

Por suerte, gracias a esos pocos que reportaron cosas, pude avanzar muy rapido en varias soluciones. Creo que la versión 1.6 ha sido la que más actualizaciones recibió desde que inicie el proyecto por ese mismo motivo.



# El futuro de GoldenDog

Me gustaría en un futuro tener un equipo de desarrolladores. Quisiera estar más abocada al area de diseño y dirección del proyecto. Aunque también metiendo mano en el codigo de a poco.
Lo cierto es que debian es tan robusto y está tan bien hecho que desde el lado del código se toca muy poco. Son mayormente scripts lo que se hace. pero bueno, esos scripts hay que mantenerlos y mejorarlos.

Por ejemplo, antes el integrity check se hacía en base a la existencia de una string muy puntual. Ahora se hace en base a un hash. Si el hash no coincide, se aplica un cambio de seguridad. Esto habla de cierta madurez entre el 
comienzo de GDL y la actualidad.

También tengo ganas de lanzar una versión server, que no dista mucho de un debian stable, y una imagen de GDL para la raspberry. Estas dos tareas probablemente las delegue al equipo de desarrollo que espero lograr armar en un 
futuro no muy lejano.

# Por qué no lo promociono

Por varios motivos, fundamentalmente por que no quiero engañar a nadie. No quiero salir a decir "es una distro" por que creo que eso sería como decir que yo hice debian. Lo cierto es que es una modificación superficial de debian
sin alterar su core. No me gustan las distros muy manoseadas llenas de bugs y con goldendog no quise tocar nada nada nada del core. Está tal cual sale de fabrica un debian. Dandole a la gente la tranquilidad que ningún archivo crítico, binario o inclusive el kernel original han sido modificados.

Cualquier persona podría comparar el hash del kernel debian stable actual contra el de goldendog y verificar que el hash coincide

Por otro lado, por que, como mencioné siempre. Es una distro que hice fundamentalmente para mi sola. Tengo muchísimas muchísimas ganas de que sea publica, pero quiero que sea un producto lo más profesional posible, dentro de mis posibildiades.

Yo tampoco soy la messi de linux. considero que aun me faltan muchas cosas por aprender y es parte de ese recorrido y ese crecimiento lo que disfruto. 


# Notas finales

En resúmen, eso. Necesito que alguna empresa o institución en caracter de mecenas, desee patrocinar el proyecto aportando el dinero necesario para levantar la infraestructura, o bien si se trata de una empresa que provee 
servicios informáticos, que patrocine el proyecto donando la infraestructura que necesito,

Y con eso podré comenzar a diseñar las patas que van a sostener todo de manera tal que pueda escalarse y perdurar en el tiempo. 

No me interesa salir ahora con bombo y platillo a anunciar algo que luego no podré sostener. 

Quiero que inclusive llegue el día que yo, dentro de, no se, 15 años, me retire del proyecto y verlo continuar crecer. 


Y con esto me despido, por ahora. 


En los próximos días espero tener listo el portal y continúo buscando la manera de al menos, comenzar la infra con un GIT server. Preferentemente gitlab, pero cualquier opción me resultaría útil. 
Más adelante quiero tener un repositorio propio para poder empaquetar algunos softwares que no están disponibles para debian, poder mantenerlos en formato .deb y agregar el repo a la distro. 

Inclusive pudiendo compartirlo con usuarios de debian que deseen software disponible para goldendog en sus sistemas debian. 


Les mando un fuerte abrazo y muchas gracias por tomarse el tiempo para leer estas palabras.

- Alexia.
