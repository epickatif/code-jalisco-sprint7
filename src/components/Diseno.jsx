import { Outlet } from 'react-router-dom';
import Encabezado from './Encabezado';
import PieDePagina from './PieDePagina';

const Diseno = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Encabezado />
      <main className="flex-grow">
        <Outlet />
      </main>
      <PieDePagina />
    </div>
  );
};

export default Diseno;

