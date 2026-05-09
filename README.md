# ElectroPro — Landing Page React

Landing page de electricidad industrial construida con React + Vite.

## Estructura

```
src/
  components/
    Navbar.jsx       → Barra de navegación fija con scroll effect
    Hero.jsx         → Sección principal con estadísticas
    About.jsx        → Quiénes somos
    Services.jsx     → Nuestros servicios (6 cards)
    Testimonials.jsx → Testimonios de clientes
    FAQ.jsx          → Preguntas frecuentes (acordeón)
    Contact.jsx      → Formulario de contacto
    Footer.jsx       → Pie de página
  App.jsx            → Componente raíz
  main.jsx           → Entry point
  index.css          → Estilos globales
index.html
package.json
vite.config.js
```

## Cómo usar

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Build para producción
npm run build
```

## Personalización

Editá los datos directamente en cada componente:
- **Nombre/teléfono/dirección** → `Contact.jsx` y `Footer.jsx`
- **Servicios** → array `SERVICES` en `Services.jsx`
- **Estadísticas** → array `STATS` en `Hero.jsx`
- **Testimonios** → array `TESTIMONIALS` en `Testimonials.jsx`
- **Preguntas** → array `FAQS` en `FAQ.jsx`
- **Logo/nombre empresa** → `Navbar.jsx` y `Footer.jsx`
