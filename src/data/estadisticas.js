// Estadísticas principales del centro
export const estadisticasPrincipales = [
  {
    id: 1,
    icon: 'FaUsers',
    value: 450,
    label: 'Atletas Activos',
    suffix: '+',
    color: 'blue'
  },
  {
    id: 2,
    icon: 'FaTrophy',
    value: 127,
    label: 'Medallas Ganadas',
    suffix: '',
    color: 'yellow'
  },
  {
    id: 3,
    icon: 'FaCalendar',
    value: 15,
    label: 'Años de Experiencia',
    suffix: '+',
    color: 'green'
  },
  {
    id: 4,
    icon: 'FaRunning',
    value: 18,
    label: 'Disciplinas Deportivas',
    suffix: '',
    color: 'orange'
  },
  {
    id: 5,
    icon: 'FaMedal',
    value: 92,
    label: 'Campeonatos Ganados',
    suffix: '',
    color: 'purple'
  },
  {
    id: 6,
    icon: 'FaGraduationCap',
    value: 156,
    label: 'Becas Otorgadas',
    suffix: '+',
    color: 'red'
  }
];

// Logros destacados recientes
export const logrosDestacados = [
  {
    id: 1,
    titulo: 'Campeones Nacionales de Atletismo 2026',
    descripcion: 'Nuestro equipo de atletismo obtuvo el primer lugar en el Campeonato Nacional Juvenil',
    fecha: '2026-04-15',
    categoria: 'Atletismo',
    medallas: { oro: 8, plata: 5, bronce: 3 },
    imagen: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Récord Estatal en Natación',
    descripcion: 'María Fernández rompe récord estatal en 200m libres con tiempo de 2:05.34',
    fecha: '2026-03-28',
    categoria: 'Natación',
    medallas: { oro: 3, plata: 2, bronce: 1 },
    imagen: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400',
    destacado: true
  },
  {
    id: 3,
    titulo: 'Subcampeones de Basquetbol',
    descripcion: 'El equipo femenil logra segundo lugar en el torneo regional Sub-17',
    fecha: '2026-04-05',
    categoria: 'Basquetbol',
    medallas: { oro: 0, plata: 1, bronce: 0 },
    imagen: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
    destacado: false
  },
  {
    id: 4,
    titulo: 'Clasificación a Olimpiada Nacional',
    descripcion: '12 atletas clasifican para representar a Jalisco en la Olimpiada Nacional 2026',
    fecha: '2026-03-15',
    categoria: 'Varios',
    medallas: { oro: 0, plata: 0, bronce: 0 },
    imagen: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400',
    destacado: true
  },
  {
    id: 5,
    titulo: 'Mejor Centro Deportivo de Jalisco',
    descripcion: 'CODE Jalisco recibe reconocimiento como el mejor centro de formación deportiva del estado',
    fecha: '2026-02-20',
    categoria: 'Reconocimiento',
    medallas: { oro: 0, plata: 0, bronce: 0 },
    imagen: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400',
    destacado: true
  },
  {
    id: 6,
    titulo: 'Torneo de Voleibol Regional',
    descripcion: 'Primer lugar en torneo regional de voleibol categoría juvenil',
    fecha: '2026-04-01',
    categoria: 'Voleibol',
    medallas: { oro: 1, plata: 0, bronce: 0 },
    imagen: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400',
    destacado: false
  }
];

// Distribución por deporte
export const deportesPorAtletas = [
  { deporte: 'Atletismo', atletas: 85, color: '#3B82F6' },
  { deporte: 'Natación', atletas: 72, color: '#10B981' },
  { deporte: 'Basquetbol', atletas: 65, color: '#F59E0B' },
  { deporte: 'Futbol', atletas: 58, color: '#EF4444' },
  { deporte: 'Voleibol', atletas: 48, color: '#8B5CF6' },
  { deporte: 'Gimnasia', atletas: 35, color: '#EC4899' },
  { deporte: 'Tenis', atletas: 28, color: '#14B8A6' },
  { deporte: 'Otros', atletas: 59, color: '#6B7280' }
];

// Información de contacto y ubicación
export const ubicacion = {
  nombre: 'CODE Jalisco',
  direccion: 'Av. Revolución #1234, Col. Centro Deportivo',
  ciudad: 'Guadalajara, Jalisco',
  codigoPostal: '44100',
  pais: 'México',
  telefono: '+52 (33) 1234-5678',
  email: 'info@codejalisco.mx',
  horario: 'Lunes a Viernes: 6:00 AM - 10:00 PM | Sábados: 7:00 AM - 8:00 PM',
  coordenadas: {
    lat: 20.6597,
    lng: -103.3496
  },
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7876!2d-103.3496!3d20.6597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM5JzM1LjAiTiAxMDPCsDIwJzU4LjYiVw!5e0!3m2!1ses!2smx!4v1234567890'
};

// Redes sociales
export const redesSociales = [
  {
    nombre: 'Facebook',
    icon: 'FaFacebook',
    url: 'https://www.facebook.com/code.jalisco',
    color: '#1877F2',
    seguidores: '15.2K'
  },
  {
    nombre: 'Instagram',
    icon: 'FaInstagram',
    url: 'https://www.instagram.com/codejal/',
    color: '#E4405F',
    seguidores: '12.8K'
  },
  {
    nombre: 'TikTok',
    icon: 'FaTiktok',
    url: 'https://www.tiktok.com/@codejal',
    color: '#000000',
    seguidores: '18.9K'
  },
  {
    nombre: 'YouTube',
    icon: 'FaYoutube',
    url: 'https://www.youtube.com/channel/UCvG1g1FaxTrCTdBHHa0sz_g',
    color: '#FF0000',
    seguidores: '5.3K'
  },
  {
    nombre: 'Sitio Web',
    icon: 'FaGlobe',
    url: 'https://www.codejalisco.gob.mx/',
    color: '#6B7280',
    seguidores: 'Oficial'
  }
];
