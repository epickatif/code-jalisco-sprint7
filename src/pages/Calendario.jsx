import { useState } from 'react';
import { FaCalendarAlt, FaTrophy, FaBook, FaUsers, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Calendario = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear] = useState(new Date().getFullYear());
  const [filterType, setFilterType] = useState('todos');

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const events = [
    // Enero 2026
    {
      id: 1,
      title: 'Inicio de Clases Ciclo 2026',
      type: 'institucional',
      date: '2026-01-06',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Bienvenida al ciclo escolar enero-junio 2026',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 2,
      title: 'Torneo Interno de Basquetbol',
      type: 'deportivo',
      date: '2026-01-15',
      time: '03:00 PM',
      location: 'Gimnasio CODE',
      description: 'Copa de inicio de año - Basquetbol varonil y femenil',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 3,
      title: 'Taller de Metas Deportivas 2026',
      type: 'academico',
      date: '2026-01-20',
      time: '10:00 AM',
      location: 'Auditorio Principal',
      description: 'Planeación y establecimiento de objetivos deportivos anuales',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 4,
      title: 'Evaluaciones Físicas Iniciales',
      type: 'academico',
      date: '2026-01-25',
      time: '07:00 AM',
      location: 'Instalaciones CODE',
      description: 'Medición de capacidades físicas al inicio del semestre',
      icon: <FaBook className="text-secondary-600" />
    },

    // Febrero 2026
    {
      id: 5,
      title: 'Campeonato de Natación Invernal',
      type: 'deportivo',
      date: '2026-02-05',
      time: '09:00 AM',
      location: 'Alberca Olímpica CODE',
      description: 'Competencia de natación con invitados de otros estados',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 6,
      title: 'Exámenes Parciales Primer Período',
      type: 'academico',
      date: '2026-02-12',
      time: '08:00 AM',
      location: 'Aulas CODE',
      description: 'Evaluaciones del primer parcial del semestre',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 7,
      title: 'Día del Amor y la Amistad CODE',
      type: 'institucional',
      date: '2026-02-14',
      time: '12:00 PM',
      location: 'Instalaciones CODE',
      description: 'Actividades recreativas y convivencia estudiantil',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 8,
      title: 'Torneo Regional de Atletismo',
      type: 'deportivo',
      date: '2026-02-22',
      time: '08:00 AM',
      location: 'Pista de Atletismo CODE',
      description: 'Competencia regional - Clasificatorio estatal',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 9,
      title: 'Reunión Padres - Primer Avance',
      type: 'institucional',
      date: '2026-02-28',
      time: '06:00 PM',
      location: 'Auditorio Principal',
      description: 'Informe de avances académicos y deportivos del primer período',
      icon: <FaUsers className="text-accent-600" />
    },

    // Marzo 2026
    {
      id: 10,
      title: 'Copa CODE Jalisco - Futbol 7',
      type: 'deportivo',
      date: '2026-03-08',
      time: '09:00 AM',
      location: 'Campos CODE',
      description: 'Torneo de futbol 7 categorías infantil y juvenil',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 11,
      title: 'Congreso Internacional del Deporte',
      type: 'academico',
      date: '2026-03-12',
      time: '09:00 AM',
      location: 'CODE Paradero',
      description: 'IV Congreso Internacional del Deporte Jalisco 2026',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 12,
      title: 'Semana del Deporte y la Cultura',
      type: 'institucional',
      date: '2026-03-17',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Semana de actividades deportivas, culturales y artísticas',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 13,
      title: 'Selectivo Estatal de Gimnasia',
      type: 'deportivo',
      date: '2026-03-25',
      time: '10:00 AM',
      location: 'Gimnasio CODE',
      description: 'Selección de gimnastas para representar a Jalisco',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 14,
      title: 'Exámenes Segundo Período',
      type: 'academico',
      date: '2026-03-30',
      time: '08:00 AM',
      location: 'Aulas CODE',
      description: 'Evaluaciones del segundo parcial',
      icon: <FaBook className="text-secondary-600" />
    },

    // Abril 2026
    {
      id: 15,
      title: 'Torneo de Voleibol de Playa',
      type: 'deportivo',
      date: '2026-04-05',
      time: '09:00 AM',
      location: 'Canchas CODE',
      description: 'Competencia de voleibol de playa 2x2',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 16,
      title: 'Semana Santa - Receso Escolar',
      type: 'institucional',
      date: '2026-04-10',
      time: 'Todo el día',
      location: 'N/A',
      description: 'Período vacacional de Semana Santa',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 17,
      title: 'Concentrado Deportivo de Pascua',
      type: 'deportivo',
      date: '2026-04-13',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Campamento intensivo durante vacaciones de Semana Santa',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 18,
      title: 'Feria de Universidades Deportivas',
      type: 'academico',
      date: '2026-04-22',
      time: '10:00 AM',
      location: 'Auditorio CODE',
      description: 'Exposición de opciones universitarias con becas deportivas',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 19,
      title: 'Campeonato Estatal de Tenis',
      type: 'deportivo',
      date: '2026-04-28',
      time: '09:00 AM',
      location: 'Canchas de Tenis CODE',
      description: 'Estatal de tenis singles y dobles - Todas las categorías',
      icon: <FaTrophy className="text-primary-600" />
    },

    // Mayo 2026
    {
      id: 20,
      title: 'Torneo Estatal de Fútbol Sub-17',
      type: 'deportivo',
      date: '2026-05-08',
      time: '09:00 AM',
      location: 'Estadio CODE Jalisco',
      description: 'Competencia estatal de fútbol categoría juvenil Sub-17',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 21,
      title: 'Exámenes Finales Primer Semestre',
      type: 'academico',
      date: '2026-05-12',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Evaluaciones finales del primer semestre 2026',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 22,
      title: 'Campeonato Regional de Natación',
      type: 'deportivo',
      date: '2026-05-15',
      time: '10:00 AM',
      location: 'Alberca Olímpica CODE',
      description: 'Competencia regional de natación - Clasificatorio Nacional',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 23,
      title: 'Reunión de Padres de Familia',
      type: 'institucional',
      date: '2026-05-18',
      time: '06:00 PM',
      location: 'Auditorio Principal',
      description: 'Junta informativa sobre resultados académicos y deportivos',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 24,
      title: 'Día del Deporte CODE Jalisco',
      type: 'institucional',
      date: '2026-05-22',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Festival deportivo con actividades recreativas y competencias',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 25,
      title: 'Torneo Interescolar de Basquetbol',
      type: 'deportivo',
      date: '2026-05-25',
      time: '03:00 PM',
      location: 'Gimnasio CODE',
      description: 'Torneo de basquetbol entre escuelas de Jalisco',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 26,
      title: 'Conferencia: Nutrición Deportiva',
      type: 'academico',
      date: '2026-05-28',
      time: '10:00 AM',
      location: 'Sala de Conferencias',
      description: 'Plática con expertos en nutrición para atletas de alto rendimiento',
      icon: <FaBook className="text-secondary-600" />
    },

    // Junio 2026
    {
      id: 27,
      title: 'Competencia de Atletismo Estatal',
      type: 'deportivo',
      date: '2026-06-05',
      time: '08:00 AM',
      location: 'Pista de Atletismo CODE',
      description: 'Campeonato estatal de atletismo - Todas las categorías',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 28,
      title: 'Presentación de Proyectos Académicos',
      type: 'academico',
      date: '2026-06-10',
      time: '09:00 AM',
      location: 'Aulas CODE',
      description: 'Exposición de proyectos finales de investigación deportiva',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 29,
      title: 'Torneo Nacional de Voleibol',
      type: 'deportivo',
      date: '2026-06-15',
      time: '09:00 AM',
      location: 'Gimnasio CODE Paradero',
      description: 'CODE Jalisco sede del Torneo Nacional Juvenil de Voleibol',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 30,
      title: 'Ceremonia de Graduación 2026',
      type: 'institucional',
      date: '2026-06-20',
      time: '05:00 PM',
      location: 'Auditorio Principal',
      description: 'Graduación de la generación 2023-2026',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 31,
      title: 'Inicio de Cursos de Verano',
      type: 'academico',
      date: '2026-06-25',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Inicio de cursos intensivos de verano en diversas disciplinas',
      icon: <FaBook className="text-secondary-600" />
    },

    // Julio 2026
    {
      id: 32,
      title: 'Campamento Deportivo de Verano',
      type: 'deportivo',
      date: '2026-07-01',
      time: '07:00 AM',
      location: 'CODE Paradero',
      description: 'Campamento de alto rendimiento con entrenadores especializados',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 33,
      title: 'Selectivo para Olimpiada Nacional',
      type: 'deportivo',
      date: '2026-07-10',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Pruebas de selección para representar a Jalisco en ON 2026',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 34,
      title: 'Taller de Psicología Deportiva',
      type: 'academico',
      date: '2026-07-15',
      time: '10:00 AM',
      location: 'Sala de Conferencias',
      description: 'Técnicas de preparación mental para competencias',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 35,
      title: 'Torneo de Tenis Juvenil',
      type: 'deportivo',
      date: '2026-07-20',
      time: '09:00 AM',
      location: 'Canchas de Tenis CODE',
      description: 'Torneo interno de tenis categorías infantil y juvenil',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 36,
      title: 'Sesión Informativa de Admisiones',
      type: 'institucional',
      date: '2026-07-25',
      time: '10:00 AM',
      location: 'Auditorio Principal',
      description: 'Información sobre el proceso de admisión ciclo 2026-2027',
      icon: <FaUsers className="text-accent-600" />
    },

    // Agosto 2026
    {
      id: 37,
      title: 'Inicio del Ciclo Escolar 2026-2027',
      type: 'institucional',
      date: '2026-08-17',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Bienvenida a nuevos estudiantes y reinicio de actividades',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 38,
      title: 'Evaluaciones Diagnósticas',
      type: 'academico',
      date: '2026-08-20',
      time: '08:00 AM',
      location: 'Aulas CODE',
      description: 'Exámenes de diagnóstico académico y físico',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 39,
      title: 'Copa CODE Jalisco - Futbol',
      type: 'deportivo',
      date: '2026-08-28',
      time: '09:00 AM',
      location: 'Estadio CODE',
      description: 'Torneo inaugural de futbol del nuevo ciclo escolar',
      icon: <FaTrophy className="text-primary-600" />
    },

    // Septiembre 2026
    {
      id: 40,
      title: 'Exámenes Primer Parcial',
      type: 'academico',
      date: '2026-09-10',
      time: '08:00 AM',
      location: 'Aulas CODE',
      description: 'Evaluaciones del primer parcial ciclo 2026-2027',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 41,
      title: 'Fiestas Patrias - Evento Cívico',
      type: 'institucional',
      date: '2026-09-15',
      time: '09:00 AM',
      location: 'Plaza Cívica CODE',
      description: 'Ceremonia cívica conmemorativa de la Independencia de México',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 42,
      title: 'Campeonato Nacional de Judo',
      type: 'deportivo',
      date: '2026-09-20',
      time: '09:00 AM',
      location: 'Dojo CODE',
      description: 'Representación de Jalisco en el Nacional de Judo 2026',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 43,
      title: 'Torneo de Ajedrez Interescolar',
      type: 'deportivo',
      date: '2026-09-25',
      time: '10:00 AM',
      location: 'Sala Multiusos CODE',
      description: 'Competencia de ajedrez categorías infantil y juvenil',
      icon: <FaTrophy className="text-primary-600" />
    },

    // Octubre 2026
    {
      id: 44,
      title: 'Olimpiada Nacional CONADE 2026',
      type: 'deportivo',
      date: '2026-10-05',
      time: '08:00 AM',
      location: 'Sede Nacional',
      description: 'Participación de atletas CODE en la ON 2026',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 45,
      title: 'Simposio de Ciencias del Deporte',
      type: 'academico',
      date: '2026-10-12',
      time: '09:00 AM',
      location: 'Auditorio CODE',
      description: 'Conferencias magistrales sobre metodología del entrenamiento',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 46,
      title: 'Torneo de Futbol Rápido',
      type: 'deportivo',
      date: '2026-10-18',
      time: '02:00 PM',
      location: 'Canchas CODE',
      description: 'Torneo relámpago de futbol rápido 5vs5',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 47,
      title: 'Exámenes Segundo Parcial',
      type: 'academico',
      date: '2026-10-25',
      time: '08:00 AM',
      location: 'Aulas CODE',
      description: 'Evaluaciones del segundo parcial',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 48,
      title: 'Halloween Deportivo CODE',
      type: 'institucional',
      date: '2026-10-30',
      time: '04:00 PM',
      location: 'Instalaciones CODE',
      description: 'Actividades recreativas y competencias con temática de Halloween',
      icon: <FaUsers className="text-accent-600" />
    },

    // Noviembre 2026
    {
      id: 49,
      title: 'Carrera Atlética "Día de Muertos"',
      type: 'deportivo',
      date: '2026-11-02',
      time: '07:00 AM',
      location: 'Circuito CODE',
      description: 'Carrera 5K y 10K conmemorativa',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 50,
      title: 'Reunión de Padres - Segundo Avance',
      type: 'institucional',
      date: '2026-11-10',
      time: '06:00 PM',
      location: 'Auditorio Principal',
      description: 'Informe de avances del segundo período académico',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 51,
      title: 'Torneo Estatal de Natación',
      type: 'deportivo',
      date: '2026-11-15',
      time: '09:00 AM',
      location: 'Alberca Olímpica CODE',
      description: 'Campeonato estatal de natación todas las categorías',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 52,
      title: 'Día de la Revolución - Evento Cívico',
      type: 'institucional',
      date: '2026-11-20',
      time: '09:00 AM',
      location: 'Plaza Cívica',
      description: 'Ceremonia conmemorativa de la Revolución Mexicana',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 53,
      title: 'Campeonato de Taekwondo',
      type: 'deportivo',
      date: '2026-11-28',
      time: '10:00 AM',
      location: 'Dojang CODE',
      description: 'Torneo estatal de taekwondo - Clasificatorio nacional',
      icon: <FaTrophy className="text-primary-600" />
    },

    // Diciembre 2026
    {
      id: 54,
      title: 'Exámenes Finales Segundo Semestre',
      type: 'academico',
      date: '2026-12-05',
      time: '08:00 AM',
      location: 'Aulas CODE',
      description: 'Evaluaciones finales del segundo semestre 2026',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 55,
      title: 'Festival Navideño CODE',
      type: 'institucional',
      date: '2026-12-10',
      time: '05:00 PM',
      location: 'Instalaciones CODE',
      description: 'Celebración navideña con actividades culturales y deportivas',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 56,
      title: 'Torneo de Basquetbol Navideño',
      type: 'deportivo',
      date: '2026-12-12',
      time: '03:00 PM',
      location: 'Gimnasio CODE',
      description: 'Copa navideña de basquetbol - Torneo interno',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 57,
      title: 'Ceremonia de Clausura 2026',
      type: 'institucional',
      date: '2026-12-18',
      time: '06:00 PM',
      location: 'Auditorio Principal',
      description: 'Clausura del ciclo escolar 2026 y premiación a destacados',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 58,
      title: 'Inicio de Vacaciones Decembrinas',
      type: 'institucional',
      date: '2026-12-21',
      time: 'Todo el día',
      location: 'N/A',
      description: 'Inicio del período vacacional de invierno',
      icon: <FaUsers className="text-accent-600" />
    }
  ];

  const filteredEvents = events.filter(event => {
    if (filterType === 'todos') return true;
    return event.type === filterType;
  });

  const getEventsByMonth = (month) => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === month;
    });
  };

  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'deportivo':
        return 'bg-primary-100 text-primary-700 border-primary-300';
      case 'academico':
        return 'bg-secondary-100 text-secondary-700 border-secondary-300';
      case 'institucional':
        return 'bg-accent-100 text-accent-700 border-accent-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getEventTypeBadge = (type) => {
    switch (type) {
      case 'deportivo':
        return 'Deportivo';
      case 'academico':
        return 'Académico';
      case 'institucional':
        return 'Institucional';
      default:
        return type;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaCalendarAlt className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Calendario de eventos
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Mantente al día con todas las actividades académicas y deportivas
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilterType('todos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterType === 'todos'
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Todos los eventos
            </button>
            <button
              onClick={() => setFilterType('deportivo')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterType === 'deportivo'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Eventos deportivos
            </button>
            <button
              onClick={() => setFilterType('academico')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterType === 'academico'
                  ? 'bg-secondary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Eventos académicos
            </button>
            <button
              onClick={() => setFilterType('institucional')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterType === 'institucional'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Eventos institucionales
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Navigation */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Próximos eventos
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`p-4 rounded-lg border-2 ${getEventTypeColor(event.type)} hover:shadow-md transition-shadow cursor-pointer`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{event.icon}</div>
                        <div className="flex-grow">
                          <h4 className="font-semibold mb-1">{event.title}</h4>
                          <p className="text-sm opacity-75">
                            {new Date(event.date).toLocaleDateString('es-MX', {
                              day: 'numeric',
                              month: 'long'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Events List */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Todos los eventos
                </h2>
                
                {/* Month Selector */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                  {months.map((month, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMonth(index)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                        selectedMonth === index
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {month}
                    </button>
                  ))}
                </div>
              </div>

              {/* Events Grid */}
              <div className="space-y-6">
                {getEventsByMonth(selectedMonth).length > 0 ? (
                  getEventsByMonth(selectedMonth).map((event) => (
                    <div key={event.id} className="card p-6 hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-primary rounded-lg flex flex-col items-center justify-center text-white">
                            <span className="text-2xl font-bold">
                              {new Date(event.date).getDate()}
                            </span>
                            <span className="text-xs uppercase">
                              {months[new Date(event.date).getMonth()].slice(0, 3)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-xl font-display font-bold text-gray-900">
                              {event.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                              {getEventTypeBadge(event.type)}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <FaClock className="text-primary-600" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-primary-600" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <FaCalendarAlt className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-xl text-gray-500">
                      No hay eventos programados para {months[selectedMonth]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendario;

