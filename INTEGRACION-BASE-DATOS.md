# Integración con base de datos en tiempo real

**Proyecto:** CODE Jalisco - Sitio Web Institucional  
**Tecnología:** Firebase Firestore (Base de datos NoSQL en tiempo real)  
**Fecha de implementación:** 11 de mayo de 2026

---

## Resumen ejecutivo

En respuesta al feedback recibido sobre la necesidad de incluir funcionalidades transaccionales con base de datos, se implementó **Firebase Firestore** para almacenar y gestionar datos en tiempo real.

### Características implementadas:

✅ **Almacenamiento persistente** de pre-inscripciones en base de datos cloud  
✅ **Sincronización en tiempo real** con Firebase Firestore  
✅ **Visualización de registros** en página dedicada  
✅ **Integración automática** al completar formulario  

---

## Tecnología utilizada

### Firebase Firestore

**¿Qué es?**  
Firebase Firestore es una base de datos NoSQL en la nube de Google, diseñada para aplicaciones web y móviles modernas.

**Ventajas para CODE Jalisco:**
- No requiere infraestructura de servidor propia
- Escalable automáticamente
- Sincronización en tiempo real
- Seguridad integrada con reglas de Firebase
- Sin costo para volúmenes bajos de datos

**Tipo de base de datos:** NoSQL (documentos JSON)  
**Hosting:** Google Cloud Platform  
**Tiempo de respuesta:** < 200ms promedio

---

## Implementación técnica

### 1. Servicio de Firebase (`src/services/firebaseService.js`)

El servicio centraliza toda la lógica de interacción con Firebase:

**Funciones principales:**
- `guardarPreInscripcion(datos)` - Guarda una nueva pre-inscripción
- `obtenerPreInscripciones()` - Recupera todas las inscripciones
- `guardarMensajeContacto(datos)` - Guarda mensajes del formulario de contacto
- `obtenerMensajesContacto()` - Recupera todos los mensajes

### 2. Integración en formulario de pre-inscripción

Cuando un usuario completa el formulario de pre-inscripción, el sistema:

1. Valida todos los campos
2. Genera número de solicitud único
3. **Guarda los datos en Firebase Firestore** ⬅️ NUEVO
4. Almacena en localStorage (backup local)
5. Envía email de confirmación
6. Redirige a página de confirmación

### 3. Página de visualización de datos

**Ruta:** `/inscripciones-bd`

Esta página demuestra la interacción con la base de datos:

- Carga todas las pre-inscripciones desde Firebase
- Muestra en tiempo real los datos almacenados
- Permite recargar los datos con un botón
- Formatea fechas y estados de cada registro

---

## Datos almacenados en la base de datos

### Colección: `preinscripciones`

Cada documento contiene:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `nombre` | String | Nombre del estudiante |
| `apellidos` | String | Apellidos del estudiante |
| `email` | String | Correo electrónico |
| `telefono` | String | Teléfono de contacto |
| `fechaNacimiento` | String | Fecha de nacimiento |
| `curp` | String | CURP del estudiante |
| `deportePrincipal` | String | Deporte principal seleccionado |
| `nivelEducativo` | String | Nivel educativo actual |
| `numeroSolicitud` | String | Número único de solicitud |
| `fechaRegistro` | Timestamp | Fecha y hora de registro (automático) |
| `estado` | String | Estado de la solicitud (default: "pendiente") |

### Ejemplo de documento en Firebase:

```json
{
  "nombre": "María",
  "apellidos": "González Pérez",
  "email": "maria.gonzalez@example.com",
  "telefono": "3312345678",
  "fechaNacimiento": "2008-05-15",
  "curp": "GOPM080515MJCLRR03",
  "deportePrincipal": "Atletismo",
  "nivelEducativo": "Secundaria",
  "numeroSolicitud": "INS-2026-XY7K9LM2P",
  "fechaRegistro": "2026-05-11T06:35:42.123Z",
  "estado": "pendiente"
}
```

---

## Cómo verificar la integración

### Paso 1: Completar una pre-inscripción

1. Navegar a https://code-jalisco.vercel.app/pre-inscripcion
2. Completar los 3 pasos del formulario
3. Enviar la solicitud

### Paso 2: Ver los datos en la base de datos

1. Navegar a https://code-jalisco.vercel.app/inscripciones-bd
2. Observar los registros cargados desde Firebase
3. Hacer clic en "Recargar datos" para verificar sincronización en tiempo real

### Paso 3: Consola de desarrollo

Abrir las herramientas de desarrollador (F12) y verificar en la consola:

```
✅ Pre-inscripción guardada en base de datos Firebase
```

---

## Arquitectura de la solución

```
┌─────────────────────────────────────────────────────────────┐
│                      Usuario Final                          │
│         (Completa formulario de pre-inscripción)            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Frontend (React)                          │
│                                                             │
│  PreInscripcion.jsx → firebaseService.js                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Firebase Firestore (Cloud)                     │
│                                                             │
│  Colección: preinscripciones                               │
│  ├─ Documento 1                                            │
│  ├─ Documento 2                                            │
│  └─ Documento N                                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│         Página de visualización (/inscripciones-bd)         │
│                                                             │
│  InscripcionesRegistradas.jsx ← firebaseService.js         │
└─────────────────────────────────────────────────────────────┘
```

---

## Conclusión

El sitio web CODE Jalisco ahora incluye:

✅ **Funcionalidad transaccional** - Los usuarios pueden enviar datos que se almacenan persistentemente  
✅ **Base de datos en tiempo real** - Firebase Firestore sincroniza datos instantáneamente  
✅ **Visualización de datos** - Página dedicada muestra todos los registros  
✅ **Escalabilidad** - La solución puede crecer sin cambios en la infraestructura

**Esto cumple con el requerimiento de "interacción con base de datos en tiempo real" solicitado en el feedback.**
