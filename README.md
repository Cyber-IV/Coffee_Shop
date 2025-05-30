# Coffee_Shop

Coffee_Shop es un proyecto de práctica que simula la página web de una cafetería, enfocada en la venta de café y postres, así como en la difusión de información relevante sobre el café.

## Características actuales

- **Página principal** con información sobre café y productos.
- **Formulario de contacto** con validación básica en JavaScript:
  - Verifica que todos los campos estén completos antes de enviar.
  - Muestra notificaciones de error o éxito al usuario.
  - Previene el envío por defecto del formulario para evitar recargas innecesarias.
- **Interactividad** en los formularios usando eventos `input` y manipulación del DOM.
- **Estructura modular** en archivos separados para HTML, CSS y JavaScript.

## Cosas que aún no están implementadas

- Validación avanzada de email (formato correcto).
- Envío real de datos a un servidor (actualmente solo muestra notificaciones locales).
- Limpieza automática del formulario tras envío exitoso.
- Accesibilidad mejorada (uso de etiquetas `label`, mensajes accesibles, etc).
- Prevención de envíos múltiples (deshabilitar botón mientras se procesa).
- Manejo de errores de red si se implementa el envío real.
- Pruebas unitarias para las funciones de JavaScript.

## Instalación

```
git clone <repository_url>
cd <project_directory>
```

## Uso

Abre el archivo `index.html` en tu navegador.

## Estructura del Proyecto

- `index.html` — Página principal.
- `contact.html` — Formulario de contacto.
- `about_us.html` — Informacion adicional de la empresa
- `entry.html` — Entrada sencilla del blog
- `tutorials.html` — Cursos adicionales
- `js/` — Scripts de JavaScript (por ejemplo, `contact.js`).
- `css/` — Hojas de estilo.
- `img/` — Imágenes del sitio.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)