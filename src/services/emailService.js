import emailjs from '@emailjs/browser';

// Configuración de EmailJS para envío de emails en producción
const EMAILJS_CONFIG = {
  serviceId: 'service_codejalisco',
  publicKey: 'kq04vExeL6ycLapyA',
  templates: {
    contacto: 'template_contacto',
    inscripcion: 'template_inscripcion',
    testimonio: 'template_testimonio'
  }
};

// Inicializar EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

/**
 * Envía confirmación por email al usuario que completó el formulario
 * @param {string} tipo - 'contacto', 'inscripcion', 'testimonio'
 * @param {object} datos - Debe incluir email del usuario
 */
export const enviarEmailConfirmacion = async (tipo, datos) => {
  if (!datos.email) {
    console.error('Error: Email del usuario no proporcionado');
    return { success: false, error: 'Email del usuario requerido' };
  }

  const params = prepararParametros(tipo, datos);
  guardarEnHistorial(tipo, datos);

  try {
    const templateId = EMAILJS_CONFIG.templates[tipo];
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId,
      params
    );

    console.log(`Confirmación enviada a: ${datos.email}`);
    return {
      success: true,
      message: `Confirmación enviada a ${datos.email}`,
      response
    };
  } catch (error) {
    console.error('Error al enviar email:', error);
    return { success: false, error: error.message };
  }
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
