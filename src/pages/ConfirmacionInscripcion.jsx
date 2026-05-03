import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaEnvelope, FaPhone, FaClock, FaHome } from 'react-icons/fa';

function ConfirmacionInscripcion() {
  const navigate = useNavigate();
  const [datosInscripcion, setDatosInscripcion] = useState(null);
  const [numeroSolicitud] = useState(() => {
    // Generar número de solicitud único
    return `INS-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  });

  useEffect(() => {
    // Recuperar datos de localStorage
    const datos = localStorage.getItem('solicitudInscripcion');
    
    if (!datos) {
      // Si no hay datos, redirigir al formulario
      navigate('/pre-inscripcion');
      return;
    }

    setDatosInscripcion(JSON.parse(datos));
    
    // Limpiar datos después de 1 minuto para seguridad
    setTimeout(() => {
      localStorage.removeItem('solicitudInscripcion');
    }, 60000);
  }, [navigate]);

  if (!datosInscripcion) {
    return null; // Mientras redirige
  }

  return (
    <>
      <Helmet>
        <title>Confirmación de Pre-inscripción - CODE Jalisco</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          {/* Mensaje de éxito */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4">
                <FaCheckCircle className="text-white text-5xl" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                ¡Solicitud Enviada Exitosamente!
              </h1>
              <p className="text-lg text-gray-600">
                Hemos recibido tu pre-inscripción a CODE Jalisco
              </p>
            </div>

            {/* Número de solicitud */}
            <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-600 mb-2">Número de Solicitud</p>
              <p className="text-2xl font-bold text-blue-600 font-mono">{numeroSolicitud}</p>
              <p className="text-sm text-gray-500 mt-2">
                Guarda este número para dar seguimiento a tu solicitud
              </p>
            </div>

            {/* Resumen de datos */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resumen de tu Solicitud</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Datos Personales</h3>
                  <dl className="space-y-1 text-sm">
                    <div>
                      <dt className="inline font-medium text-gray-600">Nombre:</dt>
                      <dd className="inline ml-2">{datosInscripcion.nombre} {datosInscripcion.apellidos}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">Email:</dt>
                      <dd className="inline ml-2">{datosInscripcion.email}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">Teléfono:</dt>
                      <dd className="inline ml-2">{datosInscripcion.telefono}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">CURP:</dt>
                      <dd className="inline ml-2">{datosInscripcion.curp}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Información Académica</h3>
                  <dl className="space-y-1 text-sm">
                    <div>
                      <dt className="inline font-medium text-gray-600">Nivel:</dt>
                      <dd className="inline ml-2 capitalize">{datosInscripcion.nivelEducativo}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">Grado:</dt>
                      <dd className="inline ml-2">{datosInscripcion.grado}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">Institución:</dt>
                      <dd className="inline ml-2">{datosInscripcion.institucionActual}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">Promedio:</dt>
                      <dd className="inline ml-2">{datosInscripcion.promedioGeneral}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Información Deportiva</h3>
                  <dl className="space-y-1 text-sm">
                    <div>
                      <dt className="inline font-medium text-gray-600">Deporte Principal:</dt>
                      <dd className="inline ml-2 capitalize">{datosInscripcion.deportePrincipal}</dd>
                    </div>
                    {datosInscripcion.deporteSecundario && (
                      <div>
                        <dt className="inline font-medium text-gray-600">Deporte Secundario:</dt>
                        <dd className="inline ml-2 capitalize">{datosInscripcion.deporteSecundario}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="inline font-medium text-gray-600">Experiencia:</dt>
                      <dd className="inline ml-2">{datosInscripcion.experienciaAnios}</dd>
                    </div>
                    {datosInscripcion.becaSolicitada && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Beca Solicitada
                        </span>
                      </div>
                    )}
                  </dl>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Tutor</h3>
                  <dl className="space-y-1 text-sm">
                    <div>
                      <dt className="inline font-medium text-gray-600">Nombre:</dt>
                      <dd className="inline ml-2">{datosInscripcion.nombreTutor}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">Relación:</dt>
                      <dd className="inline ml-2 capitalize">{datosInscripcion.relacionTutor}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">Email:</dt>
                      <dd className="inline ml-2">{datosInscripcion.emailTutor}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Próximos pasos */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximos Pasos</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Confirmación por Email</h3>
                  <p className="text-gray-600">
                    Recibirás un correo electrónico de confirmación en las próximas 24 horas con los detalles de tu solicitud y los siguientes pasos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Revisión de Documentos</h3>
                  <p className="text-gray-600">
                    Nuestro equipo revisará tu solicitud. Te contactaremos en un plazo de 3-5 días hábiles para solicitarte la documentación requerida.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Prueba Deportiva</h3>
                  <p className="text-gray-600">
                    Se agendará una prueba deportiva para evaluar tu nivel actual y determinar el programa más adecuado para ti.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Resultado Final</h3>
                  <p className="text-gray-600">
                    Te notificaremos el resultado de tu proceso de admisión y, en caso de ser aceptado, te enviaremos la información para formalizar tu inscripción.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes preguntas?</h2>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está listo para ayudarte. Puedes contactarnos por cualquiera de los siguientes medios:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">admisiones@codejalisco.mx</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FaPhone className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Teléfono</p>
                  <p className="font-medium">+52 (33) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <FaClock className="text-orange-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Horario</p>
                  <p className="font-medium">Lun-Vie 8AM-6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Botón para volver al inicio */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              <FaHome />
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConfirmacionInscripcion;
