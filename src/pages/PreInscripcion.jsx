import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaUser, FaGraduationCap, FaRunning, FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { enviarEmailConfirmacion } from '../services/emailService';
import { guardarPreInscripcion } from '../services/firebaseService';

function PreInscripcion() {
  const navigate = useNavigate();
  const [paso, setPaso] = useState(1);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [formData, setFormData] = useState({
    // Datos personales
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    genero: '',
    curp: '',
    telefono: '',
    email: '',
    direccion: '',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    codigoPostal: '',
    
    // Datos académicos
    nivelEducativo: '',
    institucionActual: '',
    promedioGeneral: '',
    grado: '',
    
    // Datos deportivos
    deportePrincipal: '',
    deporteSecundario: '',
    experienciaAnios: '',
    logrosDeportivos: '',
    clubAnterior: '',
    
    // Información del tutor
    nombreTutor: '',
    relacionTutor: '',
    telefonoTutor: '',
    emailTutor: '',
    
    // Otros
    comoConociste: '',
    becaSolicitada: false,
    comentariosAdicionales: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validarPaso = (pasoActual) => {
    const nuevosErrores = {};

    if (pasoActual === 1) {
      if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es requerido';
      if (!formData.apellidos.trim()) nuevosErrores.apellidos = 'Los apellidos son requeridos';
      if (!formData.fechaNacimiento) nuevosErrores.fechaNacimiento = 'La fecha de nacimiento es requerida';
      if (!formData.genero) nuevosErrores.genero = 'El género es requerido';
      if (!formData.curp.trim() || formData.curp.length !== 18) nuevosErrores.curp = 'CURP inválida (debe tener 18 caracteres)';
      if (!formData.telefono.trim() || formData.telefono.length < 10) nuevosErrores.telefono = 'Teléfono inválido';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nuevosErrores.email = 'Email inválido';
      if (!formData.codigoPostal.trim() || formData.codigoPostal.length !== 5) nuevosErrores.codigoPostal = 'Código postal inválido';
    }

    if (pasoActual === 2) {
      if (!formData.nivelEducativo) nuevosErrores.nivelEducativo = 'Selecciona un nivel educativo';
      if (!formData.grado) nuevosErrores.grado = 'Selecciona un grado';
      if (!formData.institucionActual.trim()) nuevosErrores.institucionActual = 'La institución actual es requerida';
      if (!formData.promedioGeneral || formData.promedioGeneral < 6 || formData.promedioGeneral > 10) {
        nuevosErrores.promedioGeneral = 'Promedio inválido (6-10)';
      }
    }

    if (pasoActual === 3) {
      if (!formData.deportePrincipal) nuevosErrores.deportePrincipal = 'Selecciona un deporte principal';
      if (!formData.experienciaAnios) nuevosErrores.experienciaAnios = 'Indica años de experiencia';
      if (!formData.nombreTutor.trim()) nuevosErrores.nombreTutor = 'El nombre del tutor es requerido';
      if (!formData.relacionTutor) nuevosErrores.relacionTutor = 'Indica la relación con el tutor';
      if (!formData.telefonoTutor.trim() || formData.telefonoTutor.length < 10) {
        nuevosErrores.telefonoTutor = 'Teléfono del tutor inválido';
      }
      if (!formData.emailTutor.trim() || !/\S+@\S+\.\S+/.test(formData.emailTutor)) {
        nuevosErrores.emailTutor = 'Email del tutor inválido';
      }
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const siguientePaso = () => {
    if (validarPaso(paso)) {
      setPaso(paso + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const anteriorPaso = () => {
    setPaso(paso - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarPaso(3)) {
      console.log('❌ Validación del paso 3 falló');
      return;
    }

    console.log('🚀 Iniciando proceso de envío...');
    setEnviando(true);

    try {
      // Generar número de solicitud
      const numeroSolicitud = `INS-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      console.log('📝 Número de solicitud generado:', numeroSolicitud);

      // Guardar datos en localStorage para la página de confirmación
      const datosCompletos = { ...formData, numeroSolicitud };
      localStorage.setItem('solicitudInscripcion', JSON.stringify(datosCompletos));
      console.log('💾 Datos guardados en localStorage');

      // Guardar en Firebase (base de datos en tiempo real)
      console.log('🔥 Intentando guardar en Firebase...');
      try {
        const resultadoDB = await guardarPreInscripcion(datosCompletos);
        if (resultadoDB.success) {
          console.log('✅ Pre-inscripción guardada en base de datos Firebase');
        } else {
          console.warn('⚠️ No se pudo guardar en BD:', resultadoDB.error);
          console.warn('El proceso continúa sin bloquear...');
        }
      } catch (error) {
        console.error('❌ Error al guardar en base de datos:', error);
        console.log('El proceso continúa sin bloquear...');
      }

      // Enviar email de confirmación al usuario
      console.log('📧 Enviando email de confirmación a:', formData.email);
      try {
        const resultadoEmail = await enviarEmailConfirmacion('inscripcion', {
          ...formData,
          numeroSolicitud
        });

        if (resultadoEmail.success) {
          console.log('✅ Email de confirmación enviado exitosamente');
        } else {
          console.warn('⚠️ No se pudo enviar el email:', resultadoEmail.error);
        }
      } catch (error) {
        console.error('❌ Error al enviar email:', error);
      }

      console.log('✅ Proceso completado, redirigiendo...');
      navigate('/confirmacion-inscripcion');
    } catch (error) {
      console.error('❌ Error general en handleSubmit:', error);
      alert('Ocurrió un error al procesar la solicitud. Por favor verifica la consola.');
    } finally {
      setEnviando(false);
    }
  };

  const pasos = [
    { numero: 1, titulo: 'Datos Personales', icono: FaUser },
    { numero: 2, titulo: 'Información Académica', icono: FaGraduationCap },
    { numero: 3, titulo: 'Información Deportiva', icono: FaRunning }
  ];

  return (
    <>
      <Helmet>
        <title>Pre-inscripción Online - CODE Jalisco</title>
        <meta name="description" content="Completa tu pre-inscripción online para unirte a CODE Jalisco" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Pre-inscripción Online</h1>
          <p className="text-xl text-gray-100">
            Completa el formulario para iniciar tu proceso de admisión
          </p>
        </div>
      </section>

      {/* Indicador de pasos */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {pasos.map((p) => {
              const IconoComponente = p.icono;
              const activo = paso === p.numero;
              const completado = paso > p.numero;
              
              return (
                <div key={p.numero} className="flex-1 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                    completado ? 'bg-green-500 text-white' :
                    activo ? 'bg-blue-600 text-white' :
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {completado ? <FaCheckCircle className="text-xl" /> : <IconoComponente className="text-xl" />}
                  </div>
                  <span className={`text-sm font-medium text-center ${
                    activo ? 'text-blue-600' : completado ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {p.titulo}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">

            {/* Paso 1: Datos Personales */}
            {paso === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Datos Personales</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre(s) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.nombre ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Juan Carlos"
                    />
                    {errores.nombre && <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellidos <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.apellidos ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="García López"
                    />
                    {errores.apellidos && <p className="text-red-500 text-sm mt-1">{errores.apellidos}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha de Nacimiento <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.fechaNacimiento ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errores.fechaNacimiento && <p className="text-red-500 text-sm mt-1">{errores.fechaNacimiento}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Género <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="genero"
                      value={formData.genero}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.genero ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona...</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errores.genero && <p className="text-red-500 text-sm mt-1">{errores.genero}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CURP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="curp"
                      value={formData.curp}
                      onChange={handleChange}
                      maxLength={18}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 uppercase ${
                        errores.curp ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="GAPL001023HJCRNN09"
                    />
                    {errores.curp && <p className="text-red-500 text-sm mt-1">{errores.curp}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.telefono ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="3312345678"
                    />
                    {errores.telefono && <p className="text-red-500 text-sm mt-1">{errores.telefono}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="correo@ejemplo.com"
                    />
                    {errores.email && <p className="text-red-500 text-sm mt-1">{errores.email}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección
                    </label>
                    <input
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Calle, Número, Colonia"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código Postal <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      maxLength={5}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.codigoPostal ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="44100"
                    />
                    {errores.codigoPostal && <p className="text-red-500 text-sm mt-1">{errores.codigoPostal}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Paso 2: Información Académica */}
            {paso === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Información Académica</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nivel Educativo <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="nivelEducativo"
                      value={formData.nivelEducativo}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.nivelEducativo ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona...</option>
                      <option value="primaria">Primaria</option>
                      <option value="secundaria">Secundaria</option>
                      <option value="preparatoria">Preparatoria</option>
                    </select>
                    {errores.nivelEducativo && <p className="text-red-500 text-sm mt-1">{errores.nivelEducativo}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Grado <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="grado"
                      value={formData.grado}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.grado ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona...</option>
                      {formData.nivelEducativo === 'primaria' && ['1°', '2°', '3°', '4°', '5°', '6°'].map(g => (
                        <option key={g} value={g}>{g} Primaria</option>
                      ))}
                      {formData.nivelEducativo === 'secundaria' && ['1°', '2°', '3°'].map(g => (
                        <option key={g} value={g}>{g} Secundaria</option>
                      ))}
                      {formData.nivelEducativo === 'preparatoria' && ['1°', '2°', '3°'].map(g => (
                        <option key={g} value={g}>{g} Preparatoria</option>
                      ))}
                    </select>
                    {errores.grado && <p className="text-red-500 text-sm mt-1">{errores.grado}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institución Actual <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="institucionActual"
                      value={formData.institucionActual}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.institucionActual ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Nombre de tu escuela actual"
                    />
                    {errores.institucionActual && <p className="text-red-500 text-sm mt-1">{errores.institucionActual}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Promedio General <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="promedioGeneral"
                      value={formData.promedioGeneral}
                      onChange={handleChange}
                      min="6"
                      max="10"
                      step="0.1"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.promedioGeneral ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="8.5"
                    />
                    {errores.promedioGeneral && <p className="text-red-500 text-sm mt-1">{errores.promedioGeneral}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Paso 3: Información Deportiva y Tutor */}
            {paso === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Información Deportiva</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deporte Principal <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="deportePrincipal"
                      value={formData.deportePrincipal}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.deportePrincipal ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona...</option>
                      <option value="futbol">Fútbol</option>
                      <option value="basquetbol">Basquetbol</option>
                      <option value="voleibol">Voleibol</option>
                      <option value="atletismo">Atletismo</option>
                      <option value="natacion">Natación</option>
                      <option value="tenis">Tenis</option>
                      <option value="gimnasia">Gimnasia</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errores.deportePrincipal && <p className="text-red-500 text-sm mt-1">{errores.deportePrincipal}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deporte Secundario
                    </label>
                    <select
                      name="deporteSecundario"
                      value={formData.deporteSecundario}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Ninguno</option>
                      <option value="futbol">Fútbol</option>
                      <option value="basquetbol">Basquetbol</option>
                      <option value="voleibol">Voleibol</option>
                      <option value="atletismo">Atletismo</option>
                      <option value="natacion">Natación</option>
                      <option value="tenis">Tenis</option>
                      <option value="gimnasia">Gimnasia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Años de Experiencia <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="experienciaAnios"
                      value={formData.experienciaAnios}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                        errores.experienciaAnios ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona...</option>
                      <option value="0-1">Menos de 1 año</option>
                      <option value="1-2">1-2 años</option>
                      <option value="2-5">2-5 años</option>
                      <option value="5+">Más de 5 años</option>
                    </select>
                    {errores.experienciaAnios && <p className="text-red-500 text-sm mt-1">{errores.experienciaAnios}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Club/Equipo Anterior
                    </label>
                    <input
                      type="text"
                      name="clubAnterior"
                      value={formData.clubAnterior}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Nombre del club/equipo"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Logros Deportivos
                    </label>
                    <textarea
                      name="logrosDeportivos"
                      value={formData.logrosDeportivos}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Menciona tus principales logros, medallas, campeonatos..."
                    />
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Información del Tutor</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo del Tutor <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombreTutor"
                        value={formData.nombreTutor}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                          errores.nombreTutor ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nombre completo"
                      />
                      {errores.nombreTutor && <p className="text-red-500 text-sm mt-1">{errores.nombreTutor}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Relación <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="relacionTutor"
                        value={formData.relacionTutor}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                          errores.relacionTutor ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Selecciona...</option>
                        <option value="padre">Padre</option>
                        <option value="madre">Madre</option>
                        <option value="tutor">Tutor Legal</option>
                        <option value="otro">Otro</option>
                      </select>
                      {errores.relacionTutor && <p className="text-red-500 text-sm mt-1">{errores.relacionTutor}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono del Tutor <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="telefonoTutor"
                        value={formData.telefonoTutor}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                          errores.telefonoTutor ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="3312345678"
                      />
                      {errores.telefonoTutor && <p className="text-red-500 text-sm mt-1">{errores.telefonoTutor}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email del Tutor <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="emailTutor"
                        value={formData.emailTutor}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
                          errores.emailTutor ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="correo@ejemplo.com"
                      />
                      {errores.emailTutor && <p className="text-red-500 text-sm mt-1">{errores.emailTutor}</p>}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Información Adicional</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ¿Cómo conociste CODE Jalisco?
                      </label>
                      <select
                        name="comoConociste"
                        value={formData.comoConociste}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Selecciona...</option>
                        <option value="redes">Redes Sociales</option>
                        <option value="recomendacion">Recomendación</option>
                        <option value="web">Página Web</option>
                        <option value="evento">Evento Deportivo</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="becaSolicitada"
                        checked={formData.becaSolicitada}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        Estoy interesado en solicitar una beca
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Comentarios Adicionales
                      </label>
                      <textarea
                        name="comentariosAdicionales"
                        value={formData.comentariosAdicionales}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="Cualquier información adicional que desees compartir..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Botones de navegación */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {paso > 1 && (
                <button
                  type="button"
                  onClick={anteriorPaso}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <FaArrowLeft />
                  Anterior
                </button>
              )}

              {paso < 3 ? (
                <button
                  type="button"
                  onClick={siguientePaso}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                >
                  Siguiente
                  <FaArrowRight />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={enviando}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ml-auto ${
                    enviando
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white`}
                >
                  {enviando ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Procesando...
                    </>
                  ) : (
                    <>
                      <FaCheckCircle />
                      Enviar Solicitud
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default PreInscripcion;
