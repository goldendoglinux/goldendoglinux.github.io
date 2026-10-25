---
slug: goldendog-y-la-ia
title: Goldendog y la IA
description: Por qué Goldendog se entrega libre de inteligencia artificial, y por qué esa decisión es de cada usuario
authors: [alexia]
tags: [blog, goldendog, linux]
---

Vivimos un momento curioso para los sistemas operativos. Casi todas las semanas aparece un nuevo asistente integrado en la barra de tareas, una función que toma capturas de pantalla "para ayudarte a recordar" o un agente que promete organizar tus archivos en tu lugar. La inteligencia artificial dejó de ser una aplicación que uno elige abrir y pasó a ser una capa más del sistema, muchas veces activada por defecto.

Y en medio de todo eso, me parece necesario dejar clara la postura de Goldendog.

<!-- truncate -->

## La postura

**Goldendog no incluirá ningún programa que utilice inteligencia artificial, ni de manera directa ni indirecta.**

No es una decisión improvisada ni una reacción a la moda. Es una consecuencia natural de lo que expresé en el [Manifiesto Goldendog](./2026-05-19-el-manifiesto-goldendog.md): un sistema operativo debe ser silencioso, predecible y no interponerse en el camino. Goldendog está diseñado para ser limpio y lo más parecido a Debian posible. Un agente que observa, sugiere o actúa por su cuenta es, por definición, todo lo contrario a "no estorbar".

Lo que entrego es un sistema donde nada hace cosas sin tu consentimiento.

## No soy anti IA

Quiero ser honesta: uso inteligencia artificial a diario. Me resuelve muchas cosas y, para mí, es un gran asistente. Pero la uso siempre con ojo crítico, revisando lo que me devuelve y entendiendo que la responsabilidad final es mía.

Justamente por eso no tomo esta postura desde el rechazo, sino desde el respeto. Si querés instalar Claude Code, otro agente de línea de comandos o un modelo local en tu Goldendog, podés hacerlo. Es tu máquina. Esa decisión pasa por cada usuario, no por mí.

## La decisión le pertenece al usuario

Considero que la forma más honesta de entregar un producto es dejando que la persona final decida si quiere o no usar IA en su sistema operativo. Tomar esa decisión por ella, preinstalando agentes o activando funciones que no pidió, no me parece ético.

Es como comprar una casa. Uno espera recibirla con las paredes firmes, el agua y la luz funcionando. Lo que cuelgue en las paredes, los muebles que elija, si quiere o no un asistente de voz en la cocina, eso ya es cosa de quien la habita. Goldendog entrega la casa; el resto lo deciden ustedes.

## Y Debian

Debian, el pilar sobre el que se apoya Goldendog, pasó este año por el mismo debate. En agosto de 2026 la comunidad votó la [Resolución General sobre el uso de LLMs](https://www.debian.org/vote/2026/vote_002), y la opción ganadora fue clara: el proyecto **ni promueve ni prohíbe** el uso de herramientas de IA generativa, y la responsabilidad sobre lo que se aporta sigue siendo siempre de la persona.

Goldendog comparte ese espíritu: neutralidad frente a la herramienta y responsabilidad humana sobre su uso. Mi forma de aplicarlo como distribución es entregar un sistema base sin IA, para que esa neutralidad sea real y sean ustedes quienes decidan.

## ¿Y las contribuciones?

Una cosa es lo que trae el sistema, y otra cómo se construye. Respecto de las contribuciones a Goldendog, no tengo una postura cerrada sobre el uso de IA para escribirlas. No me importa si una pieza de código fue escrita con ayuda de una IA, siempre y cuando esté a la altura de lo que exige, nada más y nada menos, un sistema operativo.

Lo que sí no voy a aceptar es el plagio. Todo material que se envíe para formar parte de Goldendog debe tener una licencia libre o permisiva que me permita distribuirlo libremente. Si no puedo saber de dónde viene o bajo qué términos se puede compartir, no entra.

Y hay una regla que no tiene excepciones: **nadie envía binarios compilados a Goldendog.** Se envía un repositorio abierto, sujeto a análisis. La compilación se hace siempre del lado de Goldendog, y solo después de que el paquete fue revisado exhaustivamente y se lo consideró apto para su distribución: sin riesgos de seguridad, libre de malware, virus y cualquier otra sorpresa.

Volviendo a la analogía del Espacio Schengen: confiamos en el pasaporte que emite Debian, pero cualquier cosa que quiera entrar por nuestra propia frontera pasa por nuestro control. Y ese control no se fija en qué herramienta usaste, sino en qué estás trayendo.

## En resumen

- Goldendog se entrega **libre de IA**: sin asistentes, sin agentes y sin funciones que actúen sin tu permiso.
- Sos libre de instalar las herramientas de IA que quieras. Goldendog no te lo va a impedir.
- Las contribuciones se juzgan por su calidad y su licencia, no por la herramienta con la que se escribieron.
- Nada llega como binario: todo se revisa y se compila desde Goldendog.
- La decisión de usar IA en tu sistema es tuya. Siempre.

Un sistema operativo debería acompañar, no decidir por nosotros.

— Alexia M. - Líder de proyecto
