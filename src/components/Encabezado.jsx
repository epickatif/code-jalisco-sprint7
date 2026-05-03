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
            <Link to="/sobre-nosotros" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Sobre nosotros
            </Link>
            <Link to="/programas" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Programas
            </Link>
            <Link to="/calendario" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Calendario
            </Link>
            <Link to="/atletas" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Atletas
            </Link>
            <Link to="/noticias" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Noticias
            </Link>
            <Link to="/galeria" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Galería
            </Link>
            <Link to="/testimonios" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Testimonios
            </Link>
            <Link to="/estadisticas" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Estadísticas
            </Link>
            <Link to="/admisiones" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Admisiones
            </Link>
            <Link to="/contacto" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contacto
            </Link>
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
            <Link
              to="/sobre-nosotros"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Sobre nosotros
            </Link>
            <Link
              to="/programas"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Programas
            </Link>
            <Link
              to="/calendario"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Calendario
            </Link>
            <Link
              to="/atletas"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Atletas
            </Link>
            <Link
              to="/noticias"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Noticias
            </Link>
            <Link
              to="/galeria"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Galería
            </Link>
            <Link
              to="/testimonios"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Testimonios
            </Link>
            <Link
              to="/estadisticas"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Estadísticas
            </Link>
            <Link
              to="/admisiones"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Admisiones
            </Link>
            <Link
              to="/contacto"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Encabezado;

