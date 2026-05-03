import { Helmet } from 'react-helmet-async';
import { FaUsers, FaTrophy, FaCalendar, FaRunning, FaMedal, FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import { estadisticasPrincipales, logrosDestacados, deportesPorAtletas, ubicacion } from '../data/estadisticas';

const iconMap = {
  FaUsers,
  FaTrophy,
  FaCalendar,
  FaRunning,
  FaMedal,
  FaGraduationCap
};

function Estadisticas() {
  return (
    <>
      <Helmet>
        <title>Estadísticas - CODE Jalisco</title>
        <meta name="description" content="Conoce nuestros logros, estadísticas y reconocimientos en formación deportiva de alto rendimiento" />
        <meta property="og:title" content="Estadísticas - CODE Jalisco" />
        <meta property="og:description" content="450+ atletas activos, 127 medallas ganadas y 15 años de experiencia" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Logros</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Más de 15 años formando campeones y transformando vidas a través del deporte
          </p>
        </div>
      </section>

      {/* Estadísticas Principales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Estadísticas en Números
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {estadisticasPrincipales.map((stat) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <StatCard
                  key={stat.id}
                  icon={IconComponent}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  color={stat.color}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Logros Destacados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Logros Destacados 2026
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conoce nuestros principales logros y reconocimientos recientes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logrosDestacados.map((logro) => (
              <div
                key={logro.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  logro.destacado ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={logro.imagen}
                    alt={logro.titulo}
                    className="w-full h-48 object-cover"
                  />
                  {logro.destacado && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ Destacado
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {logro.categoria}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(logro.fecha).toLocaleDateString('es-MX', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{logro.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-4">{logro.descripcion}</p>
                  
                  {(logro.medallas.oro > 0 || logro.medallas.plata > 0 || logro.medallas.bronce > 0) && (
                    <div className="flex gap-3 text-sm">
                      {logro.medallas.oro > 0 && (
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500 font-bold">🥇</span>
                          <span className="font-medium">{logro.medallas.oro}</span>
                        </div>
                      )}
                      {logro.medallas.plata > 0 && (
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400 font-bold">🥈</span>
                          <span className="font-medium">{logro.medallas.plata}</span>
                        </div>
                      )}
                      {logro.medallas.bronce > 0 && (
                        <div className="flex items-center gap-1">
                          <span className="text-orange-600 font-bold">🥉</span>
                          <span className="font-medium">{logro.medallas.bronce}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribución por Deporte */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Distribución por Deporte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deportesPorAtletas.map((deporte, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: deporte.color }}
                  >
                    {deporte.atletas}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Atletas</div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{deporte.deporte}</h3>
                <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(deporte.atletas / 450) * 100}%`,
                      backgroundColor: deporte.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación y Contacto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ubicación y Contacto
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">{ubicacion.direccion}</p>
                    <p className="text-gray-600">{ubicacion.ciudad}</p>
                    <p className="text-gray-600">C.P. {ubicacion.codigoPostal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FaPhone className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">{ubicacion.telefono}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaEnvelope className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">{ubicacion.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <FaClock className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horario</h4>
                    <p className="text-gray-600">{ubicacion.horario}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Encuéntranos</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={ubicacion.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación CODE Jalisco"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Estadisticas;
