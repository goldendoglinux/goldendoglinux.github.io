---
sidebar_position: 6
title: Goldendog Firewall
---

# Goldendog Firewall

**Goldendog Firewall** es una interfaz gráfica sencilla para **UFW** (Uncomplicated Firewall), la herramienta de cortafuegos utilizada por Debian y GoldenDog Linux. Le permite activar o desactivar el firewall, elegir la política predeterminada para el tráfico entrante y saliente, y crear sus propias reglas sin necesidad de recordar comandos de `ufw`.

![Ventana principal de Goldendog Firewall](/img/firewall-main.png)

## Instalación

Goldendog Firewall está disponible en el repositorio de GoldenDog. Si todavía no se encuentra instalado en su sistema, puede instalarlo con:

```bash
sudo apt update
sudo apt install goldendog-firewall
```

Una vez instalado, ábralo desde el menú de aplicaciones (búsquelo como **Goldendog Firewall** en las categorías *Sistema* o *Configuración*), o ejecute `goldendog-firewall` desde una terminal.

## La Ventana Principal

La ventana principal está dividida en tres secciones.

### Estado del Firewall

El interruptor **Firewall** activa o desactiva la protección de UFW. El texto que aparece debajo indica el estado actual del sistema:

- **Estado: activo**: el firewall está en funcionamiento y filtrando el tráfico.
- **Estado: inactivo (se recomienda activarlo)**: el firewall está apagado y se permite todo el tráfico.

Al iniciarse, la aplicación lee la configuración actual de UFW, de modo que el interruptor y las opciones siempre reflejan lo que el sistema está utilizando realmente.

### Configuración del Firewall

Estas son las **políticas predeterminadas**, que se aplican a toda conexión que no coincida con una regla específica:

| Opción | Recomendado | Significado |
|---|---|---|
| **Entrante** | Denegar | Otros dispositivos no pueden iniciar conexiones hacia su equipo, salvo que una regla lo permita. |
| **Saliente** | Permitir | Su equipo puede conectarse libremente a internet y a su red local. |

:::tip Configuración recomendada
Para un equipo de escritorio o una notebook, la opción más segura es **Firewall activado**, **Entrante: Denegar** y **Saliente: Permitir**. El navegador, las actualizaciones y las demás aplicaciones seguirán funcionando con normalidad, mientras que se bloquean las conexiones no solicitadas desde el exterior.
:::

### Reglas del Firewall

Las reglas son excepciones a las políticas predeterminadas. Por ejemplo, si el tráfico entrante está denegado pero usted utiliza un servidor SSH, puede agregar una regla que permita el puerto 22.

Utilice los botones ubicados debajo de la tabla para administrar sus reglas:

- **Agregar regla** (**+** verde): abre el diálogo *Agregar una regla de Firewall*.
- **Eliminar regla seleccionada** (**−**): quita la regla seleccionada de la lista.
- **Editar regla seleccionada** (lápiz): abre la regla seleccionada para modificarla.

También puede hacer **clic derecho** sobre una regla para editarla o eliminarla.

## Agregar una Regla

El diálogo *Agregar una regla de Firewall* tiene dos pestañas: **Simple** y **Avanzado**.

### Reglas Simples

![Diálogo de regla simple](/img/firewall-rule-simple.png)

La pestaña **Simple** cubre el caso más habitual: abrir o cerrar un puerto.

| Campo | Descripción |
|---|---|
| **Nombre** | Una descripción que le ayude a recordar para qué sirve la regla (por ejemplo, *Servidor SSH*). |
| **Política** | **Permitir** deja pasar el tráfico, **Denegar** lo descarta en silencio y **Rechazar** lo bloquea notificando al remitente. |
| **Dirección** | **Entrante** para el tráfico entrante, **Saliente** para el saliente, o **Ambos**. |
| **Protocolo** | **TCP**, **UDP** o **Ambos**. |
| **Interfaz** | Aplica la regla a todas las interfaces de red o solo a una en particular (por ejemplo, `wlan0` o `enp3s0`). |
| **Puerto** | Un número de puerto (`22`), un rango (`6000:6007`) o el nombre de un servicio conocido por el sistema (`ssh`, `http`). |

**Ejemplo:** para permitir conexiones SSH hacia su equipo, utilice *Política: Permitir*, *Dirección: Entrante*, *Protocolo: TCP* y *Puerto: 22*.

### Reglas Avanzadas

![Diálogo de regla avanzada](/img/firewall-rule-advanced.png)

La pestaña **Avanzado** permite filtrar además por **origen** y **destino**:

| Campo | Descripción |
|---|---|
| **Desde** | La dirección IP o red de la que proviene el tráfico (por ejemplo, `192.168.1.50` o `192.168.1.0/24`) y, opcionalmente, el puerto de origen. |
| **Hacia** | La dirección IP o red a la que se dirige el tráfico y, opcionalmente, el puerto de destino. |

Si deja una dirección vacía, la regla se aplica a *cualquier* dirección.

**Ejemplo:** para permitir SSH únicamente desde los dispositivos de su red doméstica, utilice *Política: Permitir*, *Dirección: Entrante*, *Protocolo: TCP*, *Desde: `192.168.1.0/24`* y el puerto `22` en *Hacia*.

## Aplicar los Cambios

Los cambios realizados en la ventana **no se aplican de inmediato**. Cuando haya terminado, haga clic en **Guardar y aplicar reglas**. El sistema le solicitará su contraseña, ya que modificar el firewall requiere privilegios de administrador.

A continuación, Goldendog Firewall aplica las políticas predeterminadas, agrega las reglas de la lista y activa o desactiva el firewall según el interruptor. Al finalizar correctamente, aparecerá un mensaje de confirmación en la parte inferior de la ventana. Si se produce algún problema, un diálogo mostrará el error informado por UFW.

:::info UFW conserva las reglas
Una vez aplicadas, las reglas quedan guardadas en UFW y se mantienen activas después de reiniciar el equipo. La lista de reglas de Goldendog Firewall solo muestra las reglas agregadas durante la sesión actual, y quitar una regla de esa lista **no** la elimina de UFW.
:::

## Revisar y Eliminar Reglas Aplicadas

Para ver todas las reglas activas en este momento, abra una terminal y ejecute:

```bash
sudo ufw status numbered
```

Para eliminar una regla aplicada, utilice su número según la lista anterior:

```bash
sudo ufw delete 2
```

Si desea comenzar desde una configuración limpia, puede restablecer UFW por completo. Esto elimina **todas** las reglas y desactiva el firewall, por lo que deberá volver a activarlo luego desde Goldendog Firewall:

```bash
sudo ufw reset
```
