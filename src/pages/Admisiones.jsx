import { useState } from 'react';
import { 
  FaClipboardList, 
  FaFileAlt, 
  FaUserCheck, 
  FaTrophy,
  FaCheckCircle,
  FaCalendarAlt,
  FaDollarSign,
  FaQuestionCircle
} from 'react-icons/fa';

const Admisiones = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      number: 1,
      icon: <FaClipboardList className="text-4xl" />,
      title: 'Solicitud en línea',
      description: 'Completa el formulario de solicitud en nuestro sitio web con la información del aspirante.',
      duration: '15 minutos'
    },
    {
      number: 2,
      icon: <FaFileAlt className="text-4xl" />,
      title: 'Documentación',
      description: 'Entrega los documentos requeridos: acta de nacimiento, certificado médico, boletas, y carta de buena conducta.',
      duration: '1-2 días'
    },
    {
      number: 3,
      icon: <FaTrophy className="text-4xl" />,
      title: 'Evaluación deportiva',
      description: 'Pruebas físicas y técnicas en la disciplina deportiva de interés con nuestros entrenadores.',
      duration: '1 día'
    },
    {
      number: 4,
      icon: <FaUserCheck className="text-4xl" />,
      title: 'Examen de admisión',
      description: 'Evaluación académica en matemáticas, español y conocimientos generales.',
      duration: '2 horas'
    },
    {
      number: 5,
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Entrevista',
      description: 'Entrevista con el aspirante y sus padres para conocer motivaciones y expectativas.',
      duration: '30 minutos'
    },
    {
      number: 6,
      icon: <FaCalendarAlt className="text-4xl" />,
      title: 'Resultados',
      description: 'Notificación de resultados y proceso de inscripción para aspirantes aceptados.',
      duration: '5-7 días'
    }
  ];

  const requirements = [
    'Acta de nacimiento (original y copia)',
    'CURP (copia)',
    'Certificado médico reciente (no mayor a 3 meses)',
    'Boletas de calificaciones del último año',
    'Carta de buena conducta de la escuela anterior',
    '6 fotografías tamaño infantil',
    'Comprobante de domicilio',
    'Identificación oficial de los padres o tutores'
  ];

  const scholarships = [
    {
      title: 'Beca deportiva',
      percentage: 'Hasta 50%',
      description: 'Para atletas con destacado rendimiento deportivo y potencial competitivo.',
      icon: '🏆'
    },
    {
      title: 'Beca académica',
      percentage: 'Hasta 40%',
      description: 'Para estudiantes con excelente promedio académico (9.0 o superior).',
      icon: '📚'
    },
    {
      title: 'Beca integral',
      percentage: 'Hasta 70%',
      description: 'Combinación de excelencia deportiva y académica.',
      icon: '⭐'
    },
    {
      title: 'Beca socioeconómica',
      percentage: 'Hasta 30%',
      description: 'Apoyo para familias que demuestren necesidad económica.',
      icon: '🤝'
    }
  ];

  const faqs = [
    {
      question: '¿Cuál es la edad mínima para ingresar?',
      answer: 'Aceptamos estudiantes desde los 12 años (nivel secundaria) hasta los 18 años (nivel preparatoria).'
    },
    {
      question: '¿Necesito experiencia previa en el deporte?',
      answer: 'Sí, se requiere experiencia básica en la disciplina deportiva de interés. Durante la evaluación deportiva se determinará el nivel del aspirante.'
    },
    {
      question: '¿Cuándo son las inscripciones?',
      answer: 'El proceso de admisión se realiza dos veces al año: enero-marzo para el ciclo agosto-diciembre, y julio-agosto para el ciclo enero-junio.'
    },
    {
      question: '¿Puedo cambiar de disciplina deportiva?',
      answer: 'Sí, es posible cambiar de disciplina durante el primer semestre, sujeto a evaluación y disponibilidad de cupo.'
    },
    {
      question: '¿Ofrecen transporte escolar?',
      answer: 'Sí, contamos con servicio de transporte en diversas rutas de Guadalajara y zona metropolitana con costo adicional.'
    },
    {
      question: '¿Qué pasa si mi hijo/a se lesiona?',
      answer: 'Contamos con seguro médico deportivo y equipo de fisioterapia. El estudiante puede continuar con sus estudios académicos durante la recuperación.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Proceso de admisión
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Únete a la familia CODE Jalisco y comienza tu camino hacia el éxito
            </p>
            <a href="#formulario" className="bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
              Iniciar solicitud
            </a>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Pasos para la admisión</h2>
            <p className="section-subtitle">
              Un proceso claro y transparente para facilitar tu ingreso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="text-primary-600">{step.icon}</div>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary-600 font-medium">
                  <FaCalendarAlt />
                  <span>Duración: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Documentos requeridos</h2>
              <p className="section-subtitle">
                Prepara la siguiente documentación para agilizar tu proceso
              </p>
            </div>

            <div className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <FaDollarSign className="text-6xl text-primary-600 mx-auto mb-4" />
            <h2 className="section-title">Becas disponibles</h2>
            <p className="section-subtitle">
              Apoyamos el talento con diversos programas de becas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">{scholarship.icon}</div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {scholarship.title}
                </h3>
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  {scholarship.percentage}
                </div>
                <p className="text-gray-600">{scholarship.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Las becas se otorgan con base en evaluación de desempeño y disponibilidad presupuestal.
            </p>
            <a href="/contacto" className="btn-primary inline-block">
              Solicitar información sobre becas
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FaQuestionCircle className="text-6xl text-primary-600 mx-auto mb-4" />
              <h2 className="section-title">Preguntas frecuentes</h2>
              <p className="section-subtitle">
                Resolvemos tus dudas sobre el proceso de admisión
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-display font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className={`text-primary-600 text-2xl transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="formulario" className="py-20 bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Inicia tu proceso de admisión hoy mismo o agenda una visita para conocer nuestras instalaciones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Iniciar solicitud
            </a>
            <a href="/contacto" className="bg-white hover:bg-gray-100 text-primary-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Agendar visita
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admisiones;

