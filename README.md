# CODE Jalisco - Sprint 4

Sitio web institucional para el Centro de Desarrollo Deportivo de Jalisco.

## Sprint 4: Optimización y deployment

Este es el resultado del cuarto sprint (31/03/2026 - 13/04/2026) del proyecto.

### Funcionalidades implementadas

**Nuevas del Sprint 4:**
- Meta tags SEO completos (Open Graph, Twitter Cards)
- Sitemap.xml para motores de búsqueda
- Robots.txt configurado
- Lazy loading de rutas (code splitting)
- Componente de carga optimizado
- Componente de imagen optimizada con lazy loading
- Idioma del sitio configurado a español
- Optimización del bundle de JavaScript
- Deployment en Vercel con configuración de rutas
- Mejoras de accesibilidad

**De sprints anteriores:**
- 7 páginas completamente funcionales
- Formulario de contacto con validación
- Sistema de navegación completo
- Diseño responsive
- Tabs y filtros interactivos

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
code-jalisco-sprint4/
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx
│   │   ├── PieDePagina.jsx
│   │   ├── Diseno.jsx
│   │   └── ImagenOptimizada.jsx    (NUEVO)
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── SobreNosotros.jsx
│   │   ├── Programas.jsx
│   │   ├── Calendario.jsx
│   │   ├── Atletas.jsx
│   │   ├── Admisiones.jsx
│   │   └── Contacto.jsx
│   ├── App.jsx                     (Optimizado con lazy loading)
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── sitemap.xml                 (NUEVO)
│   └── robots.txt                  (NUEVO)
├── index.html                      (Optimizado con meta tags SEO)
├── vercel.json                     (NUEVO)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Características destacadas del Sprint 4

**Optimización SEO:**
- Meta tags completos (título, descripción, keywords)
- Open Graph tags para redes sociales
- Twitter Cards configuradas
- Sitemap.xml con todas las páginas
- Robots.txt configurado
- Idioma del sitio en español
- URLs canónicas

**Optimización de rendimiento:**
- Lazy loading de rutas con React.lazy()
- Code splitting automático por página
- Componente de carga con spinner
- Componente de imagen optimizada
- Bundle optimizado y dividido

**Deployment:**
- Configuración de Vercel (vercel.json)
- Manejo correcto de rutas de React Router
- Sitio desplegado en producción
- HTTPS automático
- CDN global

### Próximos pasos (Sprints 5-8)

- Sistema de blog/noticias institucionales
- Galería multimedia (fotos y videos)
- Sistema de testimonios de estudiantes
- Integración con redes sociales
- Panel de estadísticas en tiempo real
- Sistema de inscripciones online

---

**Equipo de desarrollo:**
- Héctor Armando Salazar Andrade
- Sergio Iván Nápoles Chávez
- José David Custodio Vega

**Sprint:** 4 de 8
**Fecha:** Abril 2026

**URL de producción:** https://code-jalisco-sprint3.vercel.app

