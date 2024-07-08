---
layout: docs
prelink: /es/docs/:path
---

¡Hola todos! Esta es Alexia, su dictadora benevolente favorita de por vida para GoldenDog Linux, y pensé que sería bueno compartir algo de lo que está sucediendo detrás de escena con GDL.

El sábado construí lo que creo que sería el mejor candidato .iso para la puesta en escena. Todas las pruebas fueron exitosas y mi amigo Carles de España lo ha estado probando e instalando en algunas de sus máquinas.

También hice mi parte en una máquina virtual y espero implementarla en una computadora portátil ThinkPad en los próximos días para realizar pruebas más exhaustivas.

Si bien tenemos una hoja de ruta de cosas para verificar y probar, es posible que haya cosas que nos perdimos, por lo que queremos dedicarle algo de tiempo y probar configuraciones, instalar cosas, quitar cosas, romper y reparar algunas cosas.
para que podamos tener una idea de lo que los usuarios podrían esperar.

## ¿Fecha de lanzamiento?
Aún no hay fecha de lanzamiento, pero será muy pronto. Hay algunas cosas que quiero probar primero. En este momento les he dado el último .iso a algunos colegas y amigos míos para que lo prueben e informen cualquier cosa.
Luego habrá un programa de prueba abierto y una vez que estemos satisfechos con eso, habrá un .iso público.
Espero que este proceso no demore más de 15 días, por lo que el lanzamiento público se realizará durante los primeros días de junio de 2024.

## Colaboradores

Me encantaría tener contribuyentes para el proyecto, pero para hacerlo necesito aprender cómo puedo implementar un Acuerdo de Colaborador que los contribuyentes deben firmar, así que, si bien me encantaría tener más manos que me ayuden,
No estoy legalmente capacitado para hacerlo ahora mismo.

## Donaciones

Eventualmente, el proyecto necesitará algún tipo de financiación y patrocinio. Necesito un espejo de descarga y algo de potencia informática para construir una pequeña infraestructura de desarrollo. Ahora estoy intentando hacer esto con dinero de mi propio bolsillo, pero esto no será sostenible a largo plazo.
 Así que probablemente pronto colocaré un QR de donación de Paypal y Binance para cualquiera que esté dispuesto a contribuir.
También necesito un plan de alojamiento web con un contrato de al menos 2 años para poder alojar principalmente el correo electrónico y no tener que preocuparme por ello durante un buen tiempo.

Si crees que podrías contribuir con dinero o infraestructura o conoces a alguien a quien le gustaría patrocinar este proyecto, házmelo saber.


## Problemas y errores conocidos

Hay un problema con Calamares al intentar instalar GDL usando LVM. Este es un problema presente en todas las versiones de Calamares independientemente del Sistema Operativo. También está roto en el .iso activo de Debian, por ejemplo.
Hay algunas opciones que estoy considerando para resolver esto:

- Espere a que KDE arregle Calamares
- Implementar GDL con Ubiquity
- Produzca un video tutorial paso a paso sobre cómo configurar LVM **_ANTES_** Ejecute el instalador de Calamares
- Cree un script de partición automatizado simple para convertir el disco de destino a LVM y luego ejecute el instalador (igual que el anterior pero automatizado y ejecutado mediante script o TUI con opciones sobre nombre de partición, tamaños, nombre de vg, etc.)

¡Eso es todo por ahora, supongo!
¡Estoy súper feliz por esto y me estoy divirtiendo mucho!

Si tienes alguna pregunta o te gustaría donar o patrocinar el proyecto, envíame un correo electrónico a alexia@goldendoglinux.org, ¡¡y gracias!!

Mucho amor,

Alexia.




  