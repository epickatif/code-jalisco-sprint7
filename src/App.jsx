import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diseno from './components/Diseno';
import Inicio from './pages/Inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Diseno />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

