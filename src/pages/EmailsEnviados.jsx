import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaCheck, FaClock, FaUser, FaTrash } from 'react-icons/fa';

function EmailsEnviados() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    cargarEmails();
  }, []);

  const cargarEmails = () => {
    const emailsGuardados = JSON.parse(localStorage.getItem('emails_enviados') || '[]');
    setEmails(emailsGuardados.reverse()); // Más recientes primero
  };

  const limpiarEmails = () => {
    if (window.confirm('¿Estás seguro de limpiar todo el historial de correos?')) {
      localStorage.removeItem('emails_enviados');
      setEmails([]);
    }
  };

  const formatearFecha = (isoString) => {
    const fecha = new Date(isoString);
    return fecha.toLocaleString('es-MX', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTipoLabel = (tipo) => {
    const labels = {
      'contacto': 'Formulario de Contacto',
      'pre-inscripcion': 'Pre-inscripción',
      'testimonio': 'Nuevo Testimonio'
    };
    return labels[tipo] || tipo;
  };

  const getTipoColor = (tipo) => {
    const colors = {
      'contacto': 'bg-blue-100 text-blue-800',
      'pre-inscripcion': 'bg-green-100 text-green-800',
      'testimonio': 'bg-purple-100 text-purple-800'
    };
    return colors[tipo] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <Helmet>
        <title>Correos Enviados - CODE Jalisco (Demo)</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  📧 Correos Enviados (Demostración)
                </h1>
                <p className="text-gray-600">
                  Historial de correos de confirmación enviados a los usuarios
                </p>
                <p className="text-sm text-primary-600 mt-2">
                  <strong>Nota:</strong> Cada usuario recibe confirmación en su propio correo
                </p>
              </div>
              {emails.length > 0 && (
                <button
                  onClick={limpiarEmails}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FaTrash />
                  Limpiar Historial
                </button>
              )}
            </div>
          </div>

          {/* Lista de correos */}
          {emails.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <FaEnvelope className="text-6xl text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                No hay correos enviados
              </h2>
              <p className="text-gray-600 mb-6">
                Los correos enviados desde los formularios aparecerán aquí
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/contacto"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ir a Contacto
                </a>
                <a
                  href="/pre-inscripcion"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Ir a Pre-inscripción
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {emails.map((email, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <FaCheck className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getTipoColor(email.tipo)}`}>
                          {getTipoLabel(email.tipo)}
                        </span>
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                          <FaClock className="text-xs" />
                          {formatearFecha(email.fecha)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">
                        📧 {email.destinatario}
                      </p>
                    </div>
                  </div>

                  {/* Datos del correo */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FaUser />
                      Datos enviados:
                    </h3>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      {Object.entries(email.datos).map(([key, value]) => (
                        <div key={key}>
                          <dt className="font-medium text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </dt>
                          <dd className="text-gray-900 mt-1">
                            {typeof value === 'boolean' ? (value ? 'Sí' : 'No') : value || 'N/A'}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Info adicional */}
          <div className="mt-6 bg-blue-50 border-l-4 border-primary-400 p-4 rounded">
            <p className="text-sm text-primary-800">
              <strong>💡 Cómo funciona:</strong> Cuando un usuario completa un formulario en el sitio,
              recibe automáticamente un email de confirmación <strong>en su propio correo</strong>.
              Esta página muestra el historial de confirmaciones enviadas (modo demostración usando LocalStorage).
            </p>
            <p className="text-sm text-primary-800 mt-2">
              <strong>🚀 Para producción:</strong> Configurar credenciales de EmailJS en
              <code className="bg-primary-100 px-2 py-1 rounded ml-1">src/services/emailService.js</code>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmailsEnviados;
