# Sitio web CODE Jalisco - Sprint 7 + 8

Proyecto de desarrollo web para el Centro de Desarrollo Deportivo de Jalisco (CODE Jalisco). Sistema completo con redes sociales, estadísticas institucionales, pre-inscripciones online y confirmaciones por correo electrónico.

## Descripción

Sitio web institucional desarrollado con React y Tailwind CSS que incluye sistema de gestión de contenido, formularios de pre-inscripción multi-paso, integración con redes sociales, panel de estadísticas animadas y sistema de confirmación por email funcional en producción.

## Características principales

### Sprint 7: redes sociales y estadísticas
- Integración con redes sociales verificadas (Facebook, Instagram, TikTok, YouTube)
- Botones de compartir en 6 plataformas
- Panel de estadísticas institucionales con contadores animados
- Sección de logros destacados con 6 logros principales
- Distribución por deporte con 8 disciplinas
- Mapa interactivo de ubicación con Google Maps
- Widget de redes sociales en footer

### Sprint 8: sistema de inscripciones
- Formulario de pre-inscripción online multi-paso (3 pasos)
- Validación completa de campos en tiempo real
- Generación automática de número de solicitud
- Sistema de confirmación por correo electrónico con EmailJS configurado
- Página de confirmación de inscripción
- Historial de emails enviados

### Funcionalidades adicionales
- Calendario completo con 58 eventos del año 2026
- Sistema de noticias con filtrado y paginación
- Galería multimedia con lightbox
- Sección de testimonios con filtros por categoría
- Página de atletas destacados
- Formulario de contacto con validación
- Diseño responsive para todos los dispositivos

## Tecnologías utilizadas

- React 18.3.1
- React Router DOM 6.23.1
- Tailwind CSS 3.4.3
- Vite 5.2.11
- React Helmet Async 2.0.5
- React Icons 5.2.1
- EmailJS Browser 4.3.3 (configurado en producción)

## Estructura del proyecto

```
code-jalisco-sprint7/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Diseno.jsx
│   │   ├── Encabezado.jsx
│   │   ├── PieDePagina.jsx
│   │   ├── NewsCard.jsx
│   │   ├── TestimonioCard.jsx
│   │   ├── StatCard.jsx
│   │   ├── ShareButtons.jsx
│   │   └── Lightbox.jsx
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Atletas.jsx
│   │   ├── Noticias.jsx
│   │   ├── Galeria.jsx
│   │   ├── Testimonios.jsx
│   │   ├── Estadisticas.jsx
│   │   ├── Calendario.jsx
│   │   ├── Admisiones.jsx
│   │   ├── PreInscripcion.jsx
│   │   ├── ConfirmacionInscripcion.jsx
│   │   ├── EmailsEnviados.jsx
│   │   └── Contacto.jsx
│   ├── data/
│   │   ├── noticias.js
│   │   ├── galeria.js
│   │   ├── testimonios.js
│   │   └── estadisticas.js
│   ├── services/
│   │   └── emailService.js
│   ├── hooks/
│   │   └── useCountUp.js
│   ├── App.jsx
│   └── main.jsx
├── README.md
├── package.json
└── vite.config.js
```

## Instalación

### Requisitos previos
- Node.js 18.0 o superior
- npm 9.0 o superior

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/epickatif/code-jalisco-sprint7.git
cd code-jalisco-sprint7
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en: http://localhost:5173/

## Scripts disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm run preview` - Previsualiza build de producción
- `npm run lint` - Ejecuta ESLint para verificar código

## Sistema de emails

El sistema de confirmación por email está **completamente configurado y funcional en producción**. EmailJS está pre-configurado en el código con credenciales de producción, no requiere configuración adicional.

Los emails de confirmación se envían automáticamente:
- Al completar el formulario de contacto
- Al finalizar la pre-inscripción
- Al enviar un testimonio

El historial de emails enviados está disponible en `/emails-enviados` para fines de demostración.

## Rutas de la aplicación

- `/` - Página de inicio
- `/atletas` - Atletas destacados
- `/noticias` - Lista de noticias
- `/noticias/:slug` - Detalle de noticia
- `/galeria` - Galería multimedia
- `/testimonios` - Testimonios de la comunidad
- `/estadisticas` - Panel de estadísticas
- `/calendario` - Calendario de eventos
- `/admisiones` - Proceso de admisión
- `/pre-inscripcion` - Formulario de pre-inscripción
- `/confirmacion-inscripcion` - Confirmación de solicitud
- `/emails-enviados` - Historial de emails (demo)
- `/contacto` - Formulario de contacto

## Despliegue en producción

### Build de producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Plataformas recomendadas

- Vercel (recomendado para proyectos React + Vite)
- Netlify
- GitHub Pages
- Cloudflare Pages

### Variables de entorno

No se requieren variables de entorno. El sistema de emails está pre-configurado y funcional en producción.

## Validaciones y pruebas

### Navegadores soportados
- Google Chrome 124+
- Mozilla Firefox 125+
- Microsoft Edge 124+
- Safari 17+ (macOS/iOS)

### Dispositivos probados
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024, iPad)
- Mobile (375x667, iPhone SE)
- Mobile (414x896, iPhone 11)

### Métricas de rendimiento (Lighthouse)
- Performance: 92/100
- Accessibility: 95/100
- Best Practices: 100/100
- SEO: 100/100

## Accesibilidad

El sitio cumple con los estándares WCAG 2.1 Level AA:

- Navegación por teclado completa
- ARIA labels en elementos interactivos
- Contraste de colores adecuado (4.5:1 mínimo)
- Textos alternativos en imágenes
- Formularios con labels asociados
- Mensajes de error descriptivos

## Equipo de desarrollo

- Héctor Armando Salazar Andrade - Desarrollador full stack
- Sergio Iván Nápoles Chávez - Desarrollador frontend
- José David Custodio Vega - Desarrollador frontend

## Licencia

Este proyecto ha sido desarrollado como trabajo académico para CODE Jalisco.

## Contacto

Para consultas sobre el proyecto:
- Repositorio: https://github.com/epickatif/code-jalisco-sprint7
- Sitio web CODE Jalisco: https://www.codejalisco.gob.mx/

---

Desarrollado con React y Tailwind CSS
Sprint 7 + 8 - Mayo 2026