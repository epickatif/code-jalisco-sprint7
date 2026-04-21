import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUser, FaPaperPlane } from 'react-icons/fa';
import { testimonios, categoriasTestimonios } from '../data/testimonios';
import TestimonioCard from '../components/TestimonioCard';

function Testimonios() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formulario, setFormulario] = useState({
    nombre: '',
    rol: 'atleta',
    deporte: '',
    testimonio: '',
    edad: ''
  });

  // Filtrar testimonios según categoría
  const testimoniosFiltrados = useMemo(() => {
    if (categoriaSeleccionada === 'todos') {
      return testimonios;
    }
    
    return testimonios.filter(t => {
      const rol = t.rol.toLowerCase();
      if (categoriaSeleccionada === 'atletas') return rol.includes('atleta');
      if (categoriaSeleccionada === 'padres') return rol.includes('padre') || rol.includes('madre');
      if (categoriaSeleccionada === 'ex-alumnos') return rol.includes('ex-alumno');
      return true;
    });
  }, [categoriaSeleccionada]);

  // Testimonios destacados
  const testimoniosDestacados = useMemo(() => {
    return testimonios.filter(t => t.destacado);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por compartir tu testimonio! Será revisado por nuestro equipo.');
    setFormulario({
      nombre: '',
      rol: 'atleta',
      deporte: '',
      testimonio: '',
      edad: ''
    });
    setMostrarFormulario(false);
  };

  return (
    <>
      <Helmet>
        <title>Testimonios - CODE Jalisco</title>
        <meta name="description" content="Lee testimonios reales de atletas, padres de familia y ex-alumnos de CODE Jalisco" />
        <meta property="og:title" content="Testimonios - CODE Jalisco" />
        <meta property="og:description" content="Historias reales de éxito de nuestra comunidad deportiva" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonios</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Descubre cómo CODE Jalisco ha transformado la vida de atletas, familias y nuestra comunidad
          </p>
          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg inline-flex items-center"
          >
            <FaPaperPlane className="mr-2" />
            Comparte tu testimonio
          </button>
        </div>
      </section>

      {/* Formulario de testimonio */}
      {mostrarFormulario && (
        <section className="py-12 bg-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaUser className="mr-3 text-blue-600" />
                Comparte tu experiencia
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formulario.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="rol" className="block text-sm font-medium text-gray-700 mb-2">
                      Eres *
                    </label>
                    <select
                      id="rol"
                      name="rol"
                      required
                      value={formulario.rol}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="atleta">Atleta</option>
                      <option value="padre">Padre/Madre de familia</option>
                      <option value="ex-alumno">Ex-alumno</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="deporte" className="block text-sm font-medium text-gray-700 mb-2">
                      Deporte *
                    </label>
                    <input
                      type="text"
                      id="deporte"
                      name="deporte"
                      required
                      value={formulario.deporte}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="edad" className="block text-sm font-medium text-gray-700 mb-2">
                      Edad (opcional)
                    </label>
                    <input
                      type="number"
                      id="edad"
                      name="edad"
                      value={formulario.edad}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="testimonio" className="block text-sm font-medium text-gray-700 mb-2">
                    Tu testimonio *
                  </label>
                  <textarea
                    id="testimonio"
                    name="testimonio"
                    required
                    rows={6}
                    value={formulario.testimonio}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos tu experiencia en CODE Jalisco..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setMostrarFormulario(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Enviar testimonio
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Testimonios destacados */}
      {testimoniosDestacados.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              ⭐ Testimonios Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimoniosDestacados.map((testimonio) => (
                <TestimonioCard key={testimonio.id} testimonio={testimonio} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtros de categoría */}
      <section className="bg-gray-100 py-6 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categoriasTestimonios.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaSeleccionada(categoria.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  categoriaSeleccionada === categoria.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{categoria.icono}</span>
                {categoria.nombre}
              </button>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-600">
            Mostrando {testimoniosFiltrados.length} {testimoniosFiltrados.length === 1 ? 'testimonio' : 'testimonios'}
          </p>
        </div>
      </section>

      {/* Grid de todos los testimonios */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimoniosFiltrados.map((testimonio) => (
              <TestimonioCard key={testimonio.id} testimonio={testimonio} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonios;
