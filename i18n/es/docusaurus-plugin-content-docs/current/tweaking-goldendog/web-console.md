---
sidebar_position: 3
---

# Gestión de GoldenDog con la Consola Web

GoldenDog Linux incluye **Cockpit** preinstalado, una potente herramienta, que, a través de una interfaz web, le permite gestionar su equipo con facilidad. Ya sea un administrador de servidores o un usuario de escritorio, la Consola Web proporciona una visión clara del estado y el rendimiento de su sistema.

![Inicio de sesión en Cockpit](/img/cockpit-login.png)

## Activar la Consola Web

Por razones de seguridad, la Consola Web viene **deshabilitada** de forma predeterminada. Puede activarla de cualquiera de estas dos maneras:

- **Desde el Centro de seguridad (recomendado):** abra el **Centro de seguridad** desde el menú de aplicaciones y, en **Acceso remoto**, active **Consola web Cockpit**. Esto también abre el puerto 9090 en el firewall, y debajo del interruptor aparece el acceso directo **Abrir Cockpit**.
- **Desde una terminal:**

  ```bash
  sudo systemctl enable --now cockpit.socket
  ```

  Este método no modifica el firewall, por lo que la Consola Web solo será accesible desde este mismo equipo (`localhost`).

Para desactivarla, utilice el mismo interruptor del Centro de seguridad o ejecute `sudo systemctl disable --now cockpit.socket`.

:::tip
Mantenga la Consola Web desactivada mientras no la utilice. Cada servicio que escucha en la red es una puerta más de entrada a su equipo.
:::

## Cómo Acceder

1.  Abra **Firefox** (o su navegador preferido).
2.  Navegue a `http://localhost:9090`.
3.  Inicie sesión con su **nombre de usuario** y **contraseña** estándar de GoldenDog.

### Gestión Remota
También puede gestionar su equipo GoldenDog desde otro dispositivo en su red local. Simplemente busque la dirección IP local de su equipo y navegue a `http://[su-ip-local]:9090` desde cualquier navegador en la misma red.

Para que esto funcione, el puerto 9090 debe estar abierto en el firewall. El Centro de seguridad lo abre automáticamente al activar la Consola Web; si la activó desde una terminal, agregue en [Goldendog Firewall](/docs/firewall) una regla que permita el puerto TCP 9090.

## Acceso Administrativo

Por defecto, la Consola Web puede iniciarse en un modo "limitado" por seguridad. Para realizar tareas administrativas como instalar actualizaciones o cambiar la configuración del sistema:
1.  Haga clic en el botón **"Activar acceso administrativo"** (generalmente en la parte superior de la interfaz).
2.  Proporcione su contraseña de usuario cuando se le solicite.

## Características Principales

### Gestión Inteligente de Actualizaciones
Cockpit simplifica el mantenimiento del sistema al separar claramente las actualizaciones en dos categorías:
-   **Actualizaciones de Seguridad**: Parches críticos que deben aplicarse lo antes posible para mantener su sistema seguro.
-   **Otras Actualizaciones de Paquetes**: Mejoras generales de software y correcciones de errores.

### Estado del Sistema de un Vistazo
El tablero le ofrece datos en tiempo real sobre el uso de la CPU, el consumo de memoria y el estado del almacenamiento.

![Tablero de Cockpit](/img/cockpit-dashboard.png)

### Acceso a la Terminal
¿Necesita ejecutar un comando rápido? La Consola Web incluye un emulador de terminal totalmente funcional, para que pueda gestionar su sistema vía CLI sin salir de su navegador.
