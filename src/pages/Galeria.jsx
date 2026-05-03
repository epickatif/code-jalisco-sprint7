import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPlay, FaImages } from 'react-icons/fa';
import { albumes, fotos, videos } from '../data/galeria';
import Lightbox from '../components/Lightbox';

function Galeria() {
  const [albumSeleccionado, setAlbumSeleccionado] = useState('todos');
  const [vistaActual, setVistaActual] = useState('fotos'); // 'fotos' o 'videos'
  const [lightboxAbierto, setLightboxAbierto] = useState(false);
  const [fotoActual, setFotoActual] = useState(null);
  const [indiceActual, setIndiceActual] = useState(0);

  // Filtrar fotos según álbum seleccionado
  const fotosFiltradas = useMemo(() => {
    if (albumSeleccionado === 'todos') {
      return fotos;
    }
    return fotos.filter(foto => foto.album === albumSeleccionado);
  }, [albumSeleccionado]);

  const abrirLightbox = (foto, indice) => {
    setFotoActual(foto);
    setIndiceActual(indice);
    setLightboxAbierto(true);
  };

  const cerrarLightbox = () => {
    setLightboxAbierto(false);
    setFotoActual(null);
  };

  const irFotoAnterior = () => {
    if (indiceActual > 0) {
      const nuevoIndice = indiceActual - 1;
      setIndiceActual(nuevoIndice);
      setFotoActual(fotosFiltradas[nuevoIndice]);
    }
  };

  const irFotoSiguiente = () => {
    if (indiceActual < fotosFiltradas.length - 1) {
      const nuevoIndice = indiceActual + 1;
      setIndiceActual(nuevoIndice);
      setFotoActual(fotosFiltradas[nuevoIndice]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Galería - CODE Jalisco</title>
        <meta name="description" content="Explora nuestra galería de fotos y videos de entrenamientos, competencias y eventos en CODE Jalisco" />
        <meta property="og:title" content="Galería - CODE Jalisco" />
        <meta property="og:description" content="Explora nuestra galería de fotos y videos de entrenamientos, competencias y eventos" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería Multimedia</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Descubre momentos inolvidables de nuestra comunidad deportiva
          </p>
        </div>
      </section>

      {/* Selector de vista */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setVistaActual('fotos')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                vistaActual === 'fotos'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FaImages className="mr-2" />
              Fotos ({fotos.length})
            </button>
            <button
              onClick={() => setVistaActual('videos')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                vistaActual === 'videos'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FaPlay className="mr-2" />
              Videos ({videos.length})
            </button>
          </div>
        </div>
      </section>

      {/* Vista de Fotos */}
      {vistaActual === 'fotos' && (
        <>
          {/* Filtros de álbum */}
          <section className="bg-white py-6 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-3">
                {albumes.map((album) => (
                  <button
                    key={album.id}
                    onClick={() => setAlbumSeleccionado(album.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      albumSeleccionado === album.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <span className="mr-2">{album.icono}</span>
                    {album.nombre}
                  </button>
                ))}
              </div>
              <p className="text-center mt-4 text-gray-600">
                Mostrando {fotosFiltradas.length} {fotosFiltradas.length === 1 ? 'foto' : 'fotos'}
              </p>
            </div>
          </section>

          {/* Grid de fotos */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {fotosFiltradas.map((foto, indice) => (
                  <div
                    key={foto.id}
                    onClick={() => abrirLightbox(foto, indice)}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={foto.thumbnail}
                        alt={foto.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold text-lg">{foto.titulo}</h3>
                        <p className="text-sm text-gray-200">{foto.descripcion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Vista de Videos */}
      {vistaActual === 'videos' && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{video.titulo}</h3>
                    <p className="text-gray-600 mb-2">{video.descripcion}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Duración: {video.duracion}</span>
                      <span>{new Date(video.fecha).toLocaleDateString('es-MX')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxAbierto && fotoActual && (
        <Lightbox
          foto={fotoActual}
          onClose={cerrarLightbox}
          onPrevious={irFotoAnterior}
          onNext={irFotoSiguiente}
          hayPrevio={indiceActual > 0}
          haySiguiente={indiceActual < fotosFiltradas.length - 1}
        />
      )}
    </>
  );
}

export default Galeria;
