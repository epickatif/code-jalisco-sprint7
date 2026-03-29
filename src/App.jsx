import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diseno from './components/Diseno';

// Lazy loading de páginas para optimizar el bundle
const Inicio = lazy(() => import('./pages/Inicio'));
const SobreNosotros = lazy(() => import('./pages/SobreNosotros'));
const Programas = lazy(() => import('./pages/Programas'));
const Calendario = lazy(() => import('./pages/Calendario'));
const Atletas = lazy(() => import('./pages/Atletas'));
const Admisiones = lazy(() => import('./pages/Admisiones'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Noticias = lazy(() => import('./pages/Noticias'));
const DetalleNoticia = lazy(() => import('./pages/DetalleNoticia'));

// Componente de carga
const CargandoPagina = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<CargandoPagina />}>
        <Routes>
          <Route path="/" element={<Diseno />}>
            <Route index element={<Inicio />} />
            <Route path="sobre-nosotros" element={<SobreNosotros />} />
            <Route path="programas" element={<Programas />} />
            <Route path="calendario" element={<Calendario />} />
            <Route path="atletas" element={<Atletas />} />
            <Route path="admisiones" element={<Admisiones />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="noticias/:slug" element={<DetalleNoticia />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

