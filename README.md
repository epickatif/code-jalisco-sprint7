# CODE Jalisco - Sprint 3

Sitio web institucional para el Centro de Desarrollo Deportivo de Jalisco.

## Sprint 3: Funcionalidades interactivas

Este es el resultado del tercer sprint (17/03/2026 - 30/03/2026) del proyecto.

### Funcionalidades implementadas

**Nuevas del Sprint 3:**
- Página Contacto con formulario funcional
- Validación de campos del formulario
- Feedback visual en formulario (errores y éxito)
- Página Admisiones completa
- Proceso de admisión paso a paso
- Información de becas y apoyos
- Requisitos y documentación necesaria
- Navegación completa entre todas las 7 páginas
- Todos los enlaces habilitados

**De sprints anteriores:**
- Página Inicio con hero section
- Página Sobre Nosotros con timeline
- Página Programas con tabs interactivos
- Página Calendario con filtros
- Página Atletas con filtros por deporte

---

## Tecnologías utilizadas

- **Frontend:** React 18.3.1
- **Build Tool:** Vite 7.1.7
- **Estilos:** Tailwind CSS 3.4.18
- **Routing:** React Router DOM 7.9.5
- **Iconos:** React Icons 5.5.0
- **Control de versiones:** Git

---

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

El servidor de desarrollo se ejecutará en `http://localhost:5173`

### Estructura del proyecto

```
code-jalisco-sprint3/
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx
│   │   ├── PieDePagina.jsx
│   │   └── Diseno.jsx
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── SobreNosotros.jsx
│   │   ├── Programas.jsx
│   │   ├── Calendario.jsx
│   │   ├── Atletas.jsx
│   │   ├── Admisiones.jsx         (NUEVO)
│   │   └── Contacto.jsx           (NUEVO)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Características destacadas del Sprint 3

**Formulario de contacto funcional:**
- Campos: Nombre, Email, Teléfono, Asunto, Mensaje
- Validación en tiempo real de todos los campos
- Mensajes de error específicos para cada campo
- Feedback visual de éxito al enviar
- Diseño responsive y accesible

**Página Admisiones completa:**
- Proceso de admisión paso a paso
- Requisitos detallados por nivel educativo
- Información de becas y apoyos financieros
- Calendario de admisiones
- Documentación necesaria
- Costos y formas de pago

**Navegación completa:**
- Todas las 7 páginas del sitio funcionales
- Enlaces habilitados en Header y Footer
- Menú móvil completamente funcional
- Experiencia de usuario fluida

### Próximos pasos (Sprint 4)

- Optimización de imágenes y assets
- Implementación de lazy loading
- SEO (meta tags, sitemap)
- Testing exhaustivo
- Deployment a producción

---

**Equipo de desarrollo:**
- Héctor Armando Salazar Andrade
- Sergio Iván Nápoles Chávez
- José David Custodio Vega

**Sprint:** 3 de 4
**Fecha:** Marzo 2026

