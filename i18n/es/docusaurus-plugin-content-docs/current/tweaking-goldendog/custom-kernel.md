---
sidebar_position: 2
---

# Guía de Kernel Personalizado

Instalar un kernel personalizado en GoldenDog Linux puede ser un desafío interesante, especialmente para quienes disfrutan de la optimización profunda del sistema. Sin embargo, es una tarea que conlleva una gran responsabilidad.

:::caution Responsabilidad de Seguridad
Al instalar un kernel personalizado, usted es responsable de monitorear los **CVE** (*Common Vulnerabilities and Exposures*). Un CVE es una falla de seguridad divulgada públicamente. A diferencia de los paquetes oficiales, los kernels personalizados requieren que usted aplique manualmente los parches de [kernel.org](https://www.kernel.org) y recompile con frecuencia para mantener su sistema seguro.
:::

## Opción 1: Alexia's Kernel Installer (Avanzado)

Si desea tener la última versión estable del kernel, la herramienta recomendada es **[Alexia's Kernel Installer](https://github.com/alexiarstein/kernelinstall)**.

Creada por la desarrolladora principal de GoldenDog Linux, esta herramienta es totalmente compatible con la distribución. Simplifica el proceso al:
-   Descargar el código fuente estable más reciente de kernel.org.
-   Optimizar la configuración específicamente para GoldenDog/Debian.
-   Compilar e instalar el kernel de forma automática.

### Consideraciones Importantes
-   **Seguridad**: Deberá ejecutar el programa nuevamente para recompilar cada vez que se publique un nuevo parche de seguridad (CVE) para la rama estable.
-   **Controladores Propietarios**: Instalar una nueva versión del kernel generalmente requiere reinstalar o recompilar módulos propietarios como los de **NVIDIA** o **VMware**.

---

## Opción 2: Debian Backports (Recomendado)

Esta es la opción más segura y eficiente para la mayoría de los usuarios. Le permite ejecutar un kernel moderno mientras deja que el equipo de seguridad de Debian se encargue de los parches. Al ser proporcionados como binarios precompilados, la instalación es mucho más rápida que compilar su propio kernel.

### Pasos de Instalación

1.  **Actualice sus listas de paquetes:**
    ```bash
    sudo apt update
    ```

2.  **Instale el kernel y los encabezados desde backports:**
    ```bash
    sudo apt -t trixie-backports install linux-image-amd64 linux-headers-amd64 -y
    ```

3.  **Reinicie su equipo:**
    ```bash
    sudo reboot
    ```
    Después de reiniciar, su sistema estará ejecutando la versión de kernel más reciente disponible en el repositorio de backports.
