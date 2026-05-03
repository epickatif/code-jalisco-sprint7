import emailjs from '@emailjs/browser';

// ========================================
// CONFIGURACIÓN DE EMAILJS
// ========================================
// 📌 INSTRUCCIONES PARA ACTIVAR EMAILS REALES:
//
// 1. Crear cuenta gratuita en https://www.emailjs.com/
// 2. Ir a "Email Services" y conectar tu cuenta de Gmail/Outlook
// 3. Ir a "Email Templates" y crear 3 templates:
//
//    Template 1: "Confirmación de Contacto" (ID: template_contacto)
//    Variables: {{to_email}}, {{to_name}}, {{user_message}}, {{user_phone}}
//
//    Template 2: "Confirmación de Pre-inscripción" (ID: template_inscripcion)
//    Variables: {{to_email}}, {{to_name}}, {{numero_solicitud}}, {{deporte}}, {{nivel}}
//
//    Template 3: "Gracias por tu Testimonio" (ID: template_testimonio)
//    Variables: {{to_email}}, {{to_name}}, {{testimonio}}
//
// 4. Copiar tu Service ID y Public Key y reemplazar abajo
// 5. ¡Listo! Los emails se enviarán automáticamente

const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxxxx',     // ⚠️ REEMPLAZAR con tu Service ID
  publicKey: 'your_public_key_xxx',  // ⚠️ REEMPLAZAR con tu Public Key
  templates: {
    contacto: 'template_contacto',
    inscripcion: 'template_inscripcion',
    testimonio: 'template_testimonio'
  }
};

// ⚠️ Cambiar a true cuando configures las credenciales de EmailJS
const EMAILJS_ENABLED = false;

if (EMAILJS_ENABLED) {
  emailjs.init(EMAILJS_CONFIG.publicKey);
}

/**
 * ✉️ Envía confirmación AL USUARIO que completó el formulario
 * @param {string} tipo - 'contacto', 'inscripcion', 'testimonio'
 * @param {object} datos - Debe incluir email del usuario
 */
export const enviarEmailConfirmacion = async (tipo, datos) => {
  // Validar que existe el email del usuario
  if (!datos.email) {
    console.error('❌ Error: Email del usuario no proporcionado');
    return { success: false, error: 'Email del usuario requerido' };
  }

  // Preparar parámetros
  const params = prepararParametros(tipo, datos);

  // Guardar en historial (demo)
  guardarEnHistorial(tipo, datos);

  // ===== PRODUCCIÓN: Envío real con EmailJS =====
  if (EMAILJS_ENABLED) {
    try {
      const templateId = EMAILJS_CONFIG.templates[tipo];

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        templateId,
        params
      );

      console.log(`✅ Confirmación enviada a: ${datos.email}`);
      return {
        success: true,
        message: `Confirmación enviada a ${datos.email}`,
        response
      };
    } catch (error) {
      console.error('❌ Error al enviar email:', error);
      return { success: false, error: error.message };
    }
  }

  // ===== DESARROLLO/DEMO =====
  console.log(`\n📧 ═══════════════════════════════════`);
  console.log(`   EMAIL DE CONFIRMACIÓN (DEMO)`);
  console.log(`═══════════════════════════════════`);
  console.log(`📬 Para: ${datos.email}`);
  console.log(`📋 Tipo: ${tipo}`);
  console.log(`📄 Params:`, params);
  console.log(`═══════════════════════════════════\n`);

  return Promise.resolve({
    success: true,
    message: `Confirmación enviada a ${datos.email}`,
    demo: true,
    destinatario: datos.email
  });
};

/**
 * 📄 Prepara parámetros del email según el tipo
 */
function prepararParametros(tipo, datos) {
  const base = {
    to_email: datos.email,  // ✅ Email DEL USUARIO (no tuyo)
    to_name: datos.nombre || datos.name || 'Usuario',
    site_name: 'CODE Jalisco',
    year: new Date().getFullYear()
  };

  switch (tipo) {
    case 'contacto':
      return {
        ...base,
        user_message: datos.message || datos.mensaje,
        user_phone: datos.phone || datos.telefono || 'No proporcionado',
        subject_line: datos.subject || datos.asunto || 'Consulta general'
      };

    case 'inscripcion':
      return {
        ...base,
        to_name: `${datos.nombre} ${datos.apellidos}`,
        numero_solicitud: datos.numeroSolicitud,
        deporte: datos.deportePrincipal,
        nivel: datos.nivelEducativo,
        grado: datos.grado
      };

    case 'testimonio':
      return {
        ...base,
        rol: datos.rol,
        testimonio: datos.testimonio
      };

    default:
      return base;
  }
}

/**
 * 💾 Guarda en historial local (solo para demo)
 */
function guardarEnHistorial(tipo, datos) {
  try {
    const historial = JSON.parse(localStorage.getItem('emails_enviados') || '[]');

    historial.push({
      tipo,
      destinatario: datos.email,  // ✅ Email del usuario
      datos,
      fecha: new Date().toISOString(),
      estado: 'enviado'
    });

    localStorage.setItem('emails_enviados', JSON.stringify(historial));
  } catch (error) {
    console.warn('No se pudo guardar en historial:', error);
  }
}

// ========================================
// EXPORTACIONES ADICIONALES (compatibilidad)
// ========================================
export const enviarEmailSimulado = enviarEmailConfirmacion;
export const enviarEmailContacto = (formData) => enviarEmailConfirmacion('contacto', formData);
export const enviarConfirmacionInscripcion = (formData, numeroSolicitud) =>
  enviarEmailConfirmacion('inscripcion', { ...formData, numeroSolicitud });
