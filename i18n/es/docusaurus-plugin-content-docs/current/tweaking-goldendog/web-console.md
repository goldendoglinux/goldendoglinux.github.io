---
sidebar_position: 3
---

# Gestión de GoldenDog con la Consola Web

GoldenDog Linux incluye **Cockpit** preinstalado, una potente interfaz basada en web que le permite gestionar su equipo con facilidad. Ya sea un administrador de servidores o un usuario de escritorio, la Consola Web proporciona una visión clara del estado y el rendimiento de su sistema.

![Inicio de sesión en Cockpit](/img/cockpit-login.png)

## Cómo Acceder

1.  Abra **Firefox** (o su navegador preferido).
2.  Navegue a `http://localhost:9090`.
3.  Inicie sesión con su **nombre de usuario** y **contraseña** estándar de GoldenDog.

### Gestión Remota
También puede gestionar su equipo GoldenDog desde otro dispositivo en su red local. Simplemente busque la dirección IP local de su equipo y navegue a `http://[su-ip-local]:9090` desde cualquier navegador en la misma red.

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
