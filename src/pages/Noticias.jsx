import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import NewsCard from '../components/NewsCard';
import { noticias, categorias } from '../data/noticias';

function Noticias() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [ordenamiento, setOrdenamiento] = useState('reciente');
  const [paginaActual, setPaginaActual] = useState(1);
  const noticiasPorPagina = 6;

  // Filtrar y ordenar noticias
  const noticiasFiltradas = useMemo(() => {
    let resultado = [...noticias];

    // Filtrar por búsqueda
    if (busqueda) {
      resultado = resultado.filter(noticia =>
        noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        noticia.resumen.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (categoriaSeleccionada !== 'todas') {
      resultado = resultado.filter(noticia => noticia.categoria === categoriaSeleccionada);
    }

    // Ordenar
    resultado.sort((a, b) => {
      if (ordenamiento === 'reciente') {
        return new Date(b.fecha) - new Date(a.fecha);
      } else {
        return new Date(a.fecha) - new Date(b.fecha);
      }
    });

    return resultado;
  }, [busqueda, categoriaSeleccionada, ordenamiento]);

  // Calcular paginación
  const totalPaginas = Math.ceil(noticiasFiltradas.length / noticiasPorPagina);
  const indiceInicio = (paginaActual - 1) * noticiasPorPagina;
  const indiceFin = indiceInicio + noticiasPorPagina;
  const noticiasActuales = noticiasFiltradas.slice(indiceInicio, indiceFin);

  // Resetear a página 1 cuando cambian los filtros
  const handleFiltroChange = (setter) => (value) => {
    setter(value);
    setPaginaActual(1);
  };

  return (
    <>
      <Helmet>
        <title>Noticias - CODE Jalisco</title>
        <meta name="description" content="Mantente informado sobre las últimas noticias, eventos y logros del Centro de Desarrollo Deportivo de Jalisco." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias CODE Jalisco</h1>
          <p className="text-xl text-gray-100">Mantente al día con las últimas noticias deportivas</p>
        </div>
      </section>

      {/* Filtros y búsqueda */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Búsqueda */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={busqueda}
                  onChange={(e) => handleFiltroChange(setBusqueda)(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filtro por categoría */}
            <div className="relative">
              <select
                value={categoriaSeleccionada}
                onChange={(e) => handleFiltroChange(setCategoriaSeleccionada)(e.target.value)}
                className="w-full md:w-auto appearance-none px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white cursor-pointer"
              >
                <option value="todas">Todas las categorías</option>
                {categorias.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Ordenamiento */}
            <div className="relative">
              <select
                value={ordenamiento}
                onChange={(e) => handleFiltroChange(setOrdenamiento)(e.target.value)}
                className="w-full md:w-auto appearance-none px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white cursor-pointer"
              >
                <option value="reciente">Más reciente</option>
                <option value="antiguo">Más antiguo</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mt-4 text-gray-600">
            {noticiasFiltradas.length === 0 ? (
              <p>No se encontraron noticias</p>
            ) : (
              <p>{noticiasFiltradas.length} {noticiasFiltradas.length === 1 ? 'noticia encontrada' : 'noticias encontradas'}</p>
            )}
          </div>
        </div>
      </section>

      {/* Grid de noticias */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {noticiasActuales.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {noticiasActuales.map(noticia => (
                  <NewsCard key={noticia.id} noticia={noticia} />
                ))}
              </div>

              {/* Paginación */}
              {totalPaginas > 1 && (
                <div className="mt-12 flex justify-center items-center gap-2">
                  {/* Botón anterior */}
                  <button
                    onClick={() => setPaginaActual(prev => Math.max(1, prev - 1))}
                    disabled={paginaActual === 1}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      paginaActual === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-primary-600 border border-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    Anterior
                  </button>

                  {/* Números de página */}
                  <div className="flex gap-2">
                    {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(numero => (
                      <button
                        key={numero}
                        onClick={() => setPaginaActual(numero)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                          paginaActual === numero
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {numero}
                      </button>
                    ))}
                  </div>

                  {/* Botón siguiente */}
                  <button
                    onClick={() => setPaginaActual(prev => Math.min(totalPaginas, prev + 1))}
                    disabled={paginaActual === totalPaginas}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      paginaActual === totalPaginas
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-primary-600 border border-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron noticias con los filtros seleccionados</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Noticias;

