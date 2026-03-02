# CODE Jalisco - Desarrollo por sprints

Sitio web institucional para el Centro de Desarrollo Deportivo de Jalisco.

**Estado actual:** Sprint 2 de 4 completado
**Última actualización:** 16 de marzo de 2026

---

## Resumen del proyecto

Este repositorio contiene el desarrollo iterativo del sitio web de CODE Jalisco, siguiendo metodología Scrum con sprints de 2 semanas cada uno.

### Progreso general

- ✅ **Sprint 1** (17/02/2026 - 02/03/2026): Configuración inicial y componentes base
- ✅ **Sprint 2** (03/03/2026 - 16/03/2026): Páginas principales
- ⏳ **Sprint 3** (17/03/2026 - 30/03/2026): Funcionalidades interactivas
- ⏳ **Sprint 4** (31/03/2026 - 13/04/2026): Optimización y deployment

---

## Sprint 1: Configuración inicial y componentes base

**Periodo:** 17/02/2026 - 02/03/2026

### Funcionalidades implementadas

- ✅ Proyecto React + Vite configurado
- ✅ Tailwind CSS implementado con paleta personalizada
- ✅ React Router configurado
- ✅ Componente Encabezado (Header) con navegación responsive
- ✅ Componente PieDePagina (Footer) con información de contacto
- ✅ Componente Diseno (Layout) para estructura de páginas
- ✅ Página de Inicio con hero section y características

### Logros del Sprint 1

- Configuración técnica completa del proyecto
- Componentes base reutilizables creados
- Diseño responsive implementado
- Paleta de colores personalizada definida
- Primera página funcional con navegación básica

---

## Sprint 2: Páginas principales

**Periodo:** 03/03/2026 - 16/03/2026

### Funcionalidades implementadas

- ✅ Página Sobre Nosotros con historia, misión, visión y valores
- ✅ Timeline de historia institucional
- ✅ Sección de equipo directivo
- ✅ Página Programas con sistema de tabs interactivos
- ✅ Programas académicos y deportivos detallados
- ✅ Página Calendario con eventos institucionales
- ✅ Filtros de eventos por categoría
- ✅ Página Atletas con perfiles destacados
- ✅ Filtros de atletas por deporte
- ✅ Navegación completa entre 5 páginas funcionales

### Logros del Sprint 2

- 4 páginas nuevas completamente funcionales
- Sistema de tabs interactivos implementado
- Filtros dinámicos en Calendario y Atletas
- Timeline visual de historia institucional
- Navegación completa habilitada entre todas las páginas activas

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

---

## Páginas disponibles

### Funcionales (Sprint 1 y 2)
1. **Inicio** - `/` - Página principal con hero section y características
2. **Sobre Nosotros** - `/sobre-nosotros` - Historia, misión, visión y equipo
3. **Programas** - `/programas` - Programas académicos y deportivos con tabs
4. **Calendario** - `/calendario` - Eventos institucionales con filtros
5. **Atletas** - `/atletas` - Perfiles de atletas destacados con filtros

### Pendientes (Sprint 3 y 4)
6. **Admisiones** - Proceso de inscripción y requisitos
7. **Contacto** - Formulario de contacto funcional

---

## Estructura del proyecto

```
code-jalisco-sprint2/
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx         (Sprint 1 - Actualizado en Sprint 2)
│   │   ├── PieDePagina.jsx        (Sprint 1 - Actualizado en Sprint 2)
│   │   └── Diseno.jsx             (Sprint 1)
│   ├── pages/
│   │   ├── Inicio.jsx             (Sprint 1)
│   │   ├── SobreNosotros.jsx      (Sprint 2 - NUEVO)
│   │   ├── Programas.jsx          (Sprint 2 - NUEVO)
│   │   ├── Calendario.jsx         (Sprint 2 - NUEVO)
│   │   └── Atletas.jsx            (Sprint 2 - NUEVO)
│   ├── App.jsx                    (Sprint 1 - Actualizado en Sprint 2)
│   ├── main.jsx                   (Sprint 1)
│   └── index.css                  (Sprint 1)
├── public/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Características destacadas

### Sprint 1

**Configuración profesional:**
- Vite para desarrollo rápido con HMR (Hot Module Replacement)
- Tailwind CSS con configuración personalizada
- Paleta de colores institucional (azul, rojo, amarillo)
- Tipografías personalizadas (Inter, Poppins)

**Componentes reutilizables:**
- Header con logo, navegación desktop y menú hamburger móvil
- Footer con información de contacto, enlaces y redes sociales
- Layout wrapper para estructura consistente

### Sprint 2

**Sistema de tabs en Programas:**
- Tabs interactivos para alternar entre programas académicos y deportivos
- Diseño responsive con indicador visual de tab activo
- Estado manejado con React hooks (useState)

**Filtros dinámicos:**
- Calendario: Filtro por categoría (Todos, Académico, Deportivo, Social)
- Atletas: Filtro por deporte (Todos, Fútbol, Básquetbol, Atletismo, Natación, Voleibol)
- Actualización en tiempo real del contenido mostrado

**Timeline visual:**
- Línea de tiempo de la historia institucional
- Diseño alternado para mejor legibilidad
- Responsive en todos los dispositivos

**Navegación mejorada:**
- Enlaces funcionales en Header y Footer
- Indicadores visuales de hover
- Menú móvil con cierre automático al navegar

---

## Próximos pasos

### Sprint 3 (17/03/2026 - 30/03/2026)
- Página Admisiones con proceso de inscripción
- Página Contacto con formulario funcional
- Validación de formularios con feedback visual
- Animaciones y transiciones avanzadas
- Mejoras de accesibilidad

### Sprint 4 (31/03/2026 - 13/04/2026)
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

**Sprint:** 2 de 4
**Fecha:** Marzo 2026

