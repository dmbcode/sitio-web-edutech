import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MisionVision from './pages/MisionVision';
import Principios from './pages/Principios';
import Historia from './pages/Historia';
import Equipo from './pages/Equipo';
import Preescolar from './pages/Preescolar';
import Primaria from './pages/Primaria';
import Secundaria from './pages/Secundaria';
import MediaTecnica from './pages/MediaTecnica';
import Proyectos from './pages/Proyectos';
import Calendario from './pages/Calendario';
import Noticias from './pages/Noticias';
import Contacto from './pages/Contacto';
import Admision from './pages/Admision';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mision-vision" element={<MisionVision />} />
          <Route path="principios" element={<Principios />} />
          <Route path="historia" element={<Historia />} />
          <Route path="equipo" element={<Equipo />} />
          <Route path="preescolar" element={<Preescolar />} />
          <Route path="primaria" element={<Primaria />} />
          <Route path="secundaria" element={<Secundaria />} />
          <Route path="media-tecnica" element={<MediaTecnica />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="calendario" element={<Calendario />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="admision" element={<Admision />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
