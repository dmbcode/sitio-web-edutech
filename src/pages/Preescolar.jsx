import { Link } from 'react-router-dom';

const Preescolar = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Preescolar</h1>
  </section>

  <section id="mision-vision" className="section-mv">
    <div className="mv-container">
      <div className="mv-content">
        <article id="mision" className="mv-box">
          <h2>Preescolar</h2>
          <p>
            En <strong>EduTech</strong>, el nivel <strong>Preescolar</strong> es el punto de partida de una formación integral,
            donde los niños descubren el mundo a través del juego, la creatividad y la tecnología educativa.
            Nuestro objetivo es estimular el desarrollo cognitivo, emocional y social, en un ambiente de confianza y curiosidad. 
          </p>
        </article>
        
        <div className="preescolar-features">
          <div className="feature">
            <i className="fas fa-puzzle-piece"></i>
            <h4>Aprendizaje Lúdico</h4>
            <p>Las experiencias de juego promueven la imaginación, el trabajo en equipo y el pensamiento crítico.</p>
          </div>
          <div className="feature">
            <i className="fas fa-laptop-code"></i>
            <h4>Exploración Digital</h4>
            <p>Se introduce la tecnología de forma segura y educativa para fortalecer habilidades digitales tempranas.</p>
          </div>
          <div className="feature">
            <i className="fas fa-seedling"></i>
            <h4>Educación Sostenible</h4>
            <p>Fomentamos el amor por la naturaleza y los valores ecológicos desde los primeros años.</p>
          </div>
        </div>
      </div>
      
      <aside className="mv-sidebar">
        <ul>
          <li><a href="#" className="active">Preescolar</a></li>
          <li><Link to="/primaria">Primaria</Link></li>
          <li><Link to="/secundaria">Secundaria</Link></li>
          <li><Link to="/media-tecnica">Media Técnica</Link></li>
        </ul>
      </aside>
    </div>
  </section>
  
  
    </>
  );
};

export default Preescolar;
