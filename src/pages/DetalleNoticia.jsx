import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Diseno from '../components/Diseno';
import ImagenOptimizada from '../components/ImagenOptimizada';
import NewsCard from '../components/NewsCard';
import { noticias, categorias } from '../data/noticias';

function DetalleNoticia() {
  const { slug } = useParams();
  const noticia = noticias.find(n => n.slug === slug);

  if (!noticia) {
    return <Navigate to="/noticias" replace />;
  }

  const categoria = categorias.find(c => c.id === noticia.categoria);
  
  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-MX', opciones);
  };

  // Obtener noticias relacionadas (misma categoría, excluir la actual)
  const noticiasRelacionadas = noticias
    .filter(n => n.categoria === noticia.categoria && n.id !== noticia.id)
    .slice(0, 3);

  return (
    <Diseno>
      <Helmet>
        <title>{noticia.titulo} - CODE Jalisco</title>
        <meta name="description" content={noticia.resumen} />
        <meta property="og:title" content={noticia.titulo} />
        <meta property="og:description" content={noticia.resumen} />
        <meta property="og:image" content={noticia.imagen} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Inicio</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/noticias" className="hover:text-blue-600">Noticias</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900">{noticia.titulo}</span>
          </nav>
        </div>
      </div>

      {/* Artículo principal */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categoría */}
            {categoria && (
              <div className="mb-4">
                <span className={`${categoria.color} text-white px-4 py-2 rounded-full text-sm font-semibold inline-block`}>
                  {categoria.nombre}
                </span>
              </div>
            )}

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {noticia.titulo}
            </h1>

            {/* Metadatos */}
            <div className="flex flex-wrap items-center text-gray-600 mb-8 pb-8 border-b">
              <div className="flex items-center mr-6 mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={noticia.fecha}>{formatearFecha(noticia.fecha)}</time>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{noticia.autor}</span>
              </div>
            </div>

            {/* Imagen principal */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <ImagenOptimizada
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-auto"
              />
            </div>

            {/* Resumen */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-lg text-gray-700 font-medium">
                {noticia.resumen}
              </p>
            </div>

            {/* Contenido */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: noticia.contenido }}
            />

            {/* Botón volver */}
            <div className="pt-8 border-t">
              <Link
                to="/noticias"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver a Noticias
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Noticias relacionadas */}
      {noticiasRelacionadas.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Noticias Relacionadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {noticiasRelacionadas.map(noticiaRel => (
                <NewsCard key={noticiaRel.id} noticia={noticiaRel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Diseno>
  );
}

export default DetalleNoticia;

