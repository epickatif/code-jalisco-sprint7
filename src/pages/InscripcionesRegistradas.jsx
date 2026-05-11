import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaDatabase, FaUser, FaEnvelope, FaPhone, FaCalendar, FaCheckCircle, FaClock } from 'react-icons/fa';
import { obtenerPreInscripciones } from '../services/firebaseService';

function InscripcionesRegistradas() {
  const [inscripciones, setInscripciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarInscripciones();
  }, []);

  const cargarInscripciones = async () => {
    setCargando(true);
    setError(null);
    
    try {
      const resultado = await obtenerPreInscripciones();
      
      if (resultado.success) {
        setInscripciones(resultado.data);
      } else {
        setError(resultado.error);
      }
    } catch (err) {
      setError('Error al conectar con la base de datos');
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const formatearFecha = (timestamp) => {
    if (!timestamp) return 'N/A';
    
    try {
      const fecha = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return fecha.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'N/A';
    }
  };

  return (
    <>
      <Helmet>
        <title>Inscripciones Registradas - Base de Datos | CODE Jalisco</title>
        <meta name="description" content="Visualización en tiempo real de las pre-inscripciones almacenadas en la base de datos Firebase" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <FaDatabase className="text-5xl text-primary-600 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">
                Base de datos en tiempo real
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sistema de almacenamiento persistente de pre-inscripciones utilizando Firebase Firestore.
              Los datos se guardan automáticamente al completar el formulario de pre-inscripción.
            </p>
            <button
              onClick={cargarInscripciones}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              🔄 Recargar datos
            </button>
          </div>

          {/* Estado de carga */}
          {cargando && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600">Cargando inscripciones desde Firebase...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-800">⚠️ {error}</p>
            </div>
          )}

          {/* Lista de inscripciones */}
          {!cargando && !error && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Registros en la base de datos
                </h2>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                  {inscripciones.length} {inscripciones.length === 1 ? 'registro' : 'registros'}
                </span>
              </div>

              {inscripciones.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <FaDatabase className="text-6xl mx-auto mb-4 opacity-30" />
                  <p className="text-lg">No hay inscripciones registradas aún.</p>
                  <p className="mt-2">Complete el formulario de pre-inscripción para ver los datos aquí.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {inscripciones.map((inscripcion, index) => (
                    <div 
                      key={inscripcion.id} 
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-start space-x-3">
                          <FaUser className="text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-gray-500">Nombre completo</p>
                            <p className="font-semibold text-gray-900">
                              {inscripcion.nombre} {inscripcion.apellidos}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <FaEnvelope className="text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-semibold text-gray-900 break-all">
                              {inscripcion.email}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <FaPhone className="text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-gray-500">Teléfono</p>
                            <p className="font-semibold text-gray-900">
                              {inscripcion.telefono}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <FaCalendar className="text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-gray-500">Fecha de registro</p>
                            <p className="font-semibold text-gray-900">
                              {formatearFecha(inscripcion.fechaRegistro)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-gray-500">Número de solicitud</p>
                            <p className="font-semibold text-gray-900">
                              {inscripcion.numeroSolicitud || 'N/A'}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <FaClock className="text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-gray-500">Estado</p>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                              inscripcion.estado === 'pendiente' 
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {inscripcion.estado || 'pendiente'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Información técnica */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              ℹ️ Información técnica
            </h3>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Base de datos: Firebase Firestore (NoSQL en tiempo real)</li>
              <li>• Colección: "preinscripciones"</li>
              <li>• Los datos se guardan automáticamente al completar el formulario</li>
              <li>• Sincronización en tiempo real con la nube</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default InscripcionesRegistradas;
