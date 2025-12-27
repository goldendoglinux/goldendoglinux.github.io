---
sidebar_position: 1
---

# Instalación de GNOME

Esta guía explica cómo instalar el entorno de escritorio GNOME en GoldenDog Linux.

:::warning Configuración no Soportada
La instalación de entornos de escritorio adicionales a través de `tasksel` **no cuenta con soporte oficial**. Aunque GNOME y otros entornos probablemente funcionarán sin problemas, el uso de este método puede producir comportamientos inesperados para los cuales no podemos ofrecer soporte formal.

Podemos proporcionar orientación voluntaria si tiene problemas, pero tenga en cuenta que esta es una configuración no soportada. Puede solicitar ayuda a la comunidad a través de los [tickets de soporte](/community).
:::

## Pasos de Instalación

1.  **Actualice su sistema:**
    Abra una terminal y ejecute:
    ```bash
    sudo apt update
    ```

2.  **Inicie Tasksel:**
    Ejecute la herramienta de selección de tareas:
    ```bash
    sudo tasksel
    ```

3.  **Configurar entornos de escritorio:**
    En la interfaz de `tasksel`:
    -   **Desmarque** la opción `debian desktop environment`.
    -   **Marque** la opción `GNOME`.
    -   *(Opcional)* Si está utilizando una laptop, marque la opción `laptop`.

4.  **Notas Importantes:**
    KDE Plasma y el servidor SSH ya están instalados. **No vuelva a seleccionar** lo siguiente:
    -   `KDE Plasma`
    -   `SSH Server`
    
    Volver a seleccionar estas herramientas cuando ya están presentes puede producir resultados inesperados.

5.  **Reinicie y seleccione GNOME:**
    Una vez finalizada la instalación, reinicie su sistema:
    ```bash
    sudo reboot
    ```
    En la pantalla de inicio de sesión:
    1.  Seleccione su usuario.
    2.  Antes de ingresar su contraseña, haga clic en el **icono de la rueda dentada** en la esquina inferior derecha de la pantalla.
    3.  Seleccione **GNOME** de la lista.
    4.  Ingrese su contraseña e inicie sesión.
