import { useState } from 'react';

const ImagenOptimizada = ({ src, alt, className = '', placeholder = 'bg-gray-200' }) => {
  const [cargada, setCargada] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!cargada && !error && (
        <div className={`absolute inset-0 ${placeholder} animate-pulse`} />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          cargada ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setCargada(true)}
        onError={() => setError(true)}
      />
      {error && (
        <div className={`absolute inset-0 ${placeholder} flex items-center justify-center`}>
          <span className="text-gray-400 text-sm">Imagen no disponible</span>
        </div>
      )}
    </div>
  );
};

export default ImagenOptimizada;

