import { FaStar, FaQuoteLeft } from 'react-icons/fa';

function TestimonioCard({ testimonio }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Icono de comillas */}
      <div className="text-blue-600 mb-4">
        <FaQuoteLeft className="text-3xl opacity-20" />
      </div>

      {/* Contenido del testimonio */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonio.testimonio}"
      </p>

      {/* Estrellas */}
      <div className="flex justify-center mb-4">
        {[...Array(testimonio.estrellas)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-xl mx-0.5" />
        ))}
      </div>

      {/* Información de la persona */}
      <div className="flex items-center border-t pt-4">
        <img
          src={testimonio.foto}
          alt={testimonio.nombre}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-600"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonio.nombre}</h4>
          <p className="text-sm text-gray-600">{testimonio.rol}</p>
          {testimonio.edad && (
            <p className="text-xs text-gray-500">{testimonio.edad} años</p>
          )}
          <p className="text-xs text-blue-600 font-medium mt-1">{testimonio.deporte}</p>
        </div>
      </div>

      {/* Badge de destacado */}
      {testimonio.destacado && (
        <div className="mt-4">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full">
            ⭐ Testimonio Destacado
          </span>
        </div>
      )}
    </div>
  );
}

export default TestimonioCard;
