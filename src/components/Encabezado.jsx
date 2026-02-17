import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Encabezado = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-gray-900">CODE Jalisco</h1>
              <p className="text-xs text-gray-600">Centro de Desarrollo Deportivo</p>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Inicio
            </Link>
            <span className="text-gray-400 cursor-not-allowed">Sobre nosotros</span>
            <span className="text-gray-400 cursor-not-allowed">Programas</span>
            <span className="text-gray-400 cursor-not-allowed">Calendario</span>
            <span className="text-gray-400 cursor-not-allowed">Atletas</span>
            <span className="text-gray-400 cursor-not-allowed">Admisiones</span>
            <span className="text-gray-400 cursor-not-allowed">Contacto</span>
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
          >
            {menuAbierto ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú móvil */}
        {menuAbierto && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <span className="block text-gray-400 cursor-not-allowed">Sobre nosotros</span>
            <span className="block text-gray-400 cursor-not-allowed">Programas</span>
            <span className="block text-gray-400 cursor-not-allowed">Calendario</span>
            <span className="block text-gray-400 cursor-not-allowed">Atletas</span>
            <span className="block text-gray-400 cursor-not-allowed">Admisiones</span>
            <span className="block text-gray-400 cursor-not-allowed">Contacto</span>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Encabezado;

