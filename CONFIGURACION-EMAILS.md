# 📧 Configuración de Emails - CODE Jalisco

## ✅ Estado Actual

El sitio está **100% funcional** en modo demostración. Los formularios funcionan y guardan los datos en el historial local. Para activar el **envío real de emails**, sigue las instrucciones debajo.

---

## 🎯 Cómo Funcionan los Emails

Cuando un usuario completa un formulario en el sitio:

1. ✅ El formulario valida los datos
2. ✅ Se envía un **email de confirmación AL USUARIO** (a su correo)
3. ✅ El usuario recibe confirmación de que su mensaje/solicitud fue recibida
4. ✅ El historial se guarda en `/emails-enviados` (demo)

**🔴 IMPORTANTE:** Los emails se envían **AL CORREO DEL USUARIO**, no a un administrador.

---

## 🚀 Activar Envío Real de Emails (5 minutos)

### Paso 1: Crear Cuenta en EmailJS

1. Ir a https://www.emailjs.com/
2. Crear cuenta gratuita (hasta 200 emails/mes gratis)
3. Verificar tu email

### Paso 2: Configurar Servicio de Email

1. En el dashboard, ir a **"Email Services"**
2. Click en **"Add New Service"**
3. Seleccionar **Gmail** (o tu proveedor preferido)
4. Conectar tu cuenta de Gmail
5. **Copiar el Service ID** (ej: `service_abc123`)

### Paso 3: Crear Templates de Email

Crear 3 templates con estas especificaciones:

#### Template 1: **Confirmación de Contacto**
- **Template ID:** `template_contacto`
- **Asunto:** `Confirmación de mensaje - CODE Jalisco`
- **Contenido:**
```
Hola {{to_name}},

Hemos recibido tu mensaje:

"{{user_message}}"

Teléfono: {{user_phone}}
Asunto: {{subject_line}}

Nuestro equipo se pondrá en contacto contigo pronto.

Saludos,
{{site_name}}
```

#### Template 2: **Confirmación de Pre-inscripción**
- **Template ID:** `template_inscripcion`
- **Asunto:** `Confirmación de Pre-inscripción - CODE Jalisco`
- **Contenido:**
```
Hola {{to_name}},

Tu solicitud de pre-inscripción ha sido recibida con éxito.

Número de Solicitud: {{numero_solicitud}}
Deporte: {{deporte}}
Nivel Educativo: {{nivel}}

Te contactaremos pronto con los siguientes pasos.

Saludos,
{{site_name}}
```

#### Template 3: **Gracias por tu Testimonio**
- **Template ID:** `template_testimonio`
- **Asunto:** `Gracias por tu testimonio - CODE Jalisco`
- **Contenido:**
```
Hola {{to_name}},

Gracias por compartir tu experiencia como {{rol}}.

Tu testimonio será revisado por nuestro equipo y publicado pronto.

Saludos,
{{site_name}}
```

### Paso 4: Obtener Public Key

1. En EmailJS, ir a **"Account"** → **"General"**
2. **Copiar tu Public Key** (ej: `xyz789abc`)

### Paso 5: Configurar el Código

Abrir el archivo: `src/services/emailService.js`

Reemplazar:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxxxx',     // ⚠️ TU SERVICE ID AQUÍ
  publicKey: 'your_public_key_xxx',  // ⚠️ TU PUBLIC KEY AQUÍ
  templates: {
    contacto: 'template_contacto',
    inscripcion: 'template_inscripcion',
    testimonio: 'template_testimonio'
  }
};

const EMAILJS_ENABLED = false;  // ⚠️ CAMBIAR A true
```

Por:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'service_abc123',      // ✅ Tu Service ID real
  publicKey: 'xyz789abc',            // ✅ Tu Public Key real
  templates: {
    contacto: 'template_contacto',
    inscripcion: 'template_inscripcion',
    testimonio: 'template_testimonio'
  }
};

const EMAILJS_ENABLED = true;  // ✅ Activado
```

### Paso 6: Guardar y Probar

1. Guardar el archivo
2. Refrescar el sitio web
3. Completar el formulario de contacto con **tu propio email**
4. ✅ Deberías recibir el email de confirmación en tu bandeja

---

## 📋 Funcionalidades de Email

| Formulario | Email va a | Contenido |
|------------|-----------|-----------|
| **Contacto** | Email del usuario | Confirmación de mensaje recibido |
| **Pre-inscripción** | Email del aspirante | Número de solicitud + siguiente paso |
| **Testimonio** | Email del autor | Agradecimiento por compartir |

---

## 🔍 Verificar que Funciona

1. Ve a `/contacto`
2. Completa el formulario con **tu propio email**
3. Enviar
4. Revisa tu bandeja de entrada
5. ✅ Deberías recibir la confirmación

También puedes ver el historial en: `/emails-enviados`

---

## ⚠️ Límites del Plan Gratuito

- **200 emails/mes** gratis
- Si necesitas más, upgrade a plan pago (desde $10/mes para 1000 emails)

---

## 💡 Recomendaciones

✅ Usa un email profesional (ej: `info@codejalisco.edu.mx`)
✅ Personaliza los templates con el logo de CODE
✅ Activa tracking de emails en EmailJS dashboard
✅ Configura respuestas automáticas si es necesario

---

¡Listo! El sitio está 100% listo para producción. 🚀
