import { FaTrophy, FaGraduationCap, FaUsers, FaChartLine } from 'react-icons/fa';

const Inicio = () => {
  const caracteristicas = [
    {
      icon: <FaTrophy className="text-5xl text-primary-600" />,
      titulo: 'Excelencia deportiva',
      descripcion: 'Entrenamiento de alto rendimiento con entrenadores certificados y instalaciones de primer nivel.'
    },
    {
      icon: <FaGraduationCap className="text-5xl text-primary-600" />,
      titulo: 'Educación de calidad',
      descripcion: 'Programa académico completo que permite a los atletas desarrollarse integralmente.'
    },
    {
      icon: <FaUsers className="text-5xl text-primary-600" />,
      titulo: 'Desarrollo integral',
      descripcion: 'Formamos atletas completos con valores, disciplina y compromiso social.'
    },
    {
      icon: <FaChartLine className="text-5xl text-primary-600" />,
      titulo: 'Resultados comprobados',
      descripcion: 'Más de 15 años formando campeones estatales, nacionales e internacionales.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Formamos campeones dentro y fuera de la cancha
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              CODE Jalisco es el centro de desarrollo deportivo líder en México, donde combinamos excelencia académica con entrenamiento deportivo de alto rendimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-accent-500 hover:bg-accent-600 text-gray-900">
                Conocer más
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
                Proceso de admisión
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Por qué elegir CODE Jalisco?</h2>
            <p className="section-subtitle">
              Somos más que una escuela, somos una familia que impulsa el talento deportivo y académico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caracteristicas.map((item, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Atletas activos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-blue-200">Disciplinas deportivas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Tasa de graduación</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Medallas nacionales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿Listo para ser parte de CODE Jalisco?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a la familia de atletas que están transformando su futuro a través del deporte y la educación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Solicitar información
            </button>
            <button className="btn-outline">
              Agendar visita
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;

