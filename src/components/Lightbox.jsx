import { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Lightbox({ foto, onClose, onPrevious, onNext, hayPrevio, haySiguiente }) {
  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hayPrevio) onPrevious();
      if (e.key === 'ArrowRight' && haySiguiente) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevious, onNext, hayPrevio, haySiguiente]);

  // Prevenir scroll del body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!foto) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
        aria-label="Cerrar lightbox"
      >
        <FaTimes className="text-3xl" />
      </button>

      {/* Botón anterior */}
      {hayPrevio && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 p-4"
          aria-label="Imagen anterior"
        >
          <FaChevronLeft className="text-4xl" />
        </button>
      )}

      {/* Contenedor de imagen */}
      <div 
        className="max-w-7xl max-h-[90vh] mx-auto px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={foto.url}
          alt={foto.titulo}
          className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg shadow-2xl"
        />
        
        {/* Información de la foto */}
        <div className="mt-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">{foto.titulo}</h3>
          <p className="text-gray-300">{foto.descripcion}</p>
          <p className="text-sm text-gray-400 mt-2">
            {new Date(foto.fecha).toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>

      {/* Botón siguiente */}
      {haySiguiente && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 p-4"
          aria-label="Imagen siguiente"
        >
          <FaChevronRight className="text-4xl" />
        </button>
      )}

      {/* Instrucciones */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
        <p>Usa las flechas del teclado para navegar • ESC para cerrar</p>
      </div>
    </div>
  );
}

export default Lightbox;
