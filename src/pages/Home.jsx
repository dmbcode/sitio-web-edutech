import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

  
  <section id="inicio" className="hero">
    <h1>Bienvenidos al Colegio EduTech</h1>
    <p>Formando estudiantes para un futuro digital y sostenible.</p>
  </section>

  <section className="frase-representativa">
    <div className="frase-container">
      <h2>"Formamos mentes brillantes para construir un futuro lleno de innovación y valores."</h2>
      <p>- EduTech -</p>
    </div>
  </section>

  <section id="admisiones" className="admisiones-banner">
    <div className="admisiones-content">
      <div className="admisiones-texto">
        <h2>ADMISIONES</h2>
        <p>Ven y vive la experiencia <strong>EduTech</strong></p>
      </div>
      <div className="admisiones-boton">
        <Link to="/admision" className="btn-admision">Quiero ser parte de EduTech</Link>
      </div>
    </div>
  </section>
  
  <section id="niveles" className="section">
    <h2>Niveles Educativos</h2>
    <p>Ofrecemos programas de preescolar, primaria, secundaria y media técnica, con un enfoque en competencias digitales y valores humanos.</p>
    <div className="oferta-container">
      <div className="oferta-card preescolar">
        <Link to="/preescolar">
          <img src="img/1.png" alt="Preescolar" />
          <h4>Preescolar</h4>
        </Link>
      </div>

      <div className="oferta-card primaria">
        <Link to="/primaria">
          <img src="img/2.png" alt="Primaria" />
          <h4>Primaria</h4>
        </Link>
      </div>

      <div className="oferta-card secundaria">
        <Link to="/secundaria">
          <img src="img/3.png" alt="Secundaria" />
          <h4>Secundaria</h4>
        </Link>
      </div>

      <div className="oferta-card tecnica">
        <Link to="/media-tecnica">
          <img src="img/4.png" alt="Técnica" />
          <h4>Media Técnica</h4>
        </Link>
      </div>
    </div>
  </section>

  <section id="futuro" className="section">
    <h2>Formando estudiantes para un futuro digital y sostenible</h2>
    <p> 
      Nuestro compromiso es brindar una educación moderna que combine la tecnología, la sostenibilidad y el desarrollo humano. 
      Preparamos a nuestros estudiantes para enfrentar los retos del siglo XXI, fomentando la creatividad, la conciencia ambiental 
      y las habilidades digitales necesarias para transformar el mundo.
    </p>
    
    <div className="futuro-container">
      <div className="futuro-card">
        <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Innovación Digital" />
        <h4>Innovación Digital</h4>
        <p>Incorporamos herramientas tecnológicas y metodologías activas que potencian el aprendizaje en el aula.</p>
      </div>

      <div className="futuro-card">
        <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" alt="Sostenibilidad" />
        <h4>Sostenibilidad</h4>
        <p>Promovemos el cuidado del medio ambiente y la responsabilidad social en cada proyecto educativo.</p>
      </div>
      
      <div className="futuro-card">
        <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Pensamiento Crítico" />
        <h4>Pensamiento Crítico</h4>
        <p>Formamos estudiantes capaces de analizar, crear soluciones y tomar decisiones informadas.</p>
      </div>
      
      <div className="futuro-card">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="Trabajo Colaborativo" />
        <h4>Trabajo Colaborativo</h4>
        <p>Fomentamos el trabajo en equipo, la empatía y la comunicación efectiva entre los estudiantes.</p>
      </div>
      
      <div className="futuro-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2942/2942909.png" alt="Formación Integral" />
        <h4>Formación Integral</h4>
        <p>Desarrollamos competencias académicas, sociales y éticas que preparan para la vida y el futuro.</p>
      </div>
    </div>
  </section>
  
  <section className="frase-representativa">
    <div className="frase-container">
      <h2>"En EduTech formamos personas capaces de cambiar el mundo."</h2>
      <p>- EduTech -</p>
    </div>
  </section>

  
    </>
  );
};

export default Home;
