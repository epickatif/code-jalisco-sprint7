import { Link } from 'react-router-dom';
import ImagenOptimizada from './ImagenOptimizada';
import { categorias } from '../data/noticias';

function NewsCard({ noticia }) {
  const categoria = categorias.find(c => c.id === noticia.categoria);
  
  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-MX', opciones);
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/noticias/${noticia.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <ImagenOptimizada
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {categoria && (
            <span className={`absolute top-4 left-4 ${categoria.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
              {categoria.nombre}
            </span>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={noticia.fecha}>{formatearFecha(noticia.fecha)}</time>
            <span className="mx-2">•</span>
            <span>{noticia.autor}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {noticia.titulo}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4">
            {noticia.resumen}
          </p>
          
          <div className="flex items-center text-blue-600 font-semibold">
            Leer más
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default NewsCard;

