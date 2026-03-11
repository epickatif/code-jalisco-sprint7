import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PieDePagina = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">CODE Jalisco</h3>
            <p className="text-gray-400 mb-4">
              Centro de Desarrollo Deportivo de Jalisco
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Av. Revolución 1500, Col. Olímpica<br />Guadalajara, Jalisco</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>+52 (33) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@codejalisco.edu.mx</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/programas" className="hover:text-white transition-colors">Programas</Link></li>
              <li><Link to="/calendario" className="hover:text-white transition-colors">Calendario</Link></li>
              <li><Link to="/atletas" className="hover:text-white transition-colors">Atletas</Link></li>
              <li><Link to="/admisiones" className="hover:text-white transition-colors">Admisiones</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CODE Jalisco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default PieDePagina;

