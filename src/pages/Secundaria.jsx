import { Link } from 'react-router-dom';

const Secundaria = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Secundaria</h1>
  </section>

  <section id="mision-vision" className="section-mv">
    <div className="mv-container">
      <div className="mv-content">
        <article id="mision" className="mv-box">
          <h2>Secundaria</h2>
          <p>
          En el nivel <strong>Secundaria</strong> de <strong>EduTech</strong>, acompañamos a nuestros estudiantes en una etapa clave de crecimiento personal y académico.
          Fortalecemos las competencias comunicativas, científicas y tecnológicas a través de metodologías activas, pensamiento crítico y proyectos interdisciplinarios que conectan el conocimiento con la vida real.
          Nuestro enfoque pedagógico fomenta la autonomía, la responsabilidad y la innovación, preparando a los jóvenes para asumir con confianza los retos del mundo digital y sostenible.
          Promovemos además la formación ética y ciudadana, guiándolos hacia la construcción de su proyecto de vida con valores, empatía y visión global.
          </p>
        </article>

        <div className="preescolar-features">
          <div className="feature">
            <i className="fas fa-puzzle-piece"></i>
            <h4>Aprendizaje Científico</h4>
            <p>
              Promovemos la investigación, el pensamiento lógico y la experimentación como base del conocimiento y la innovación.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-laptop-code"></i>
            <h4>Pensamiento Crítico</h4>
            <p>
              Fomentamos la reflexión, el análisis y la resolución creativa de problemas desde una perspectiva ética y responsable.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-seedling"></i>
            <h4>Educación Tecnológica</h4>
            <p>
              Desarrollamos habilidades digitales y pensamiento computacional con herramientas modernas de programación y robótica.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h4>Formación en Valores</h4>
            <p>
              Impulsamos la convivencia, la empatía y la responsabilidad social como
              pilares del desarrollo personal y comunitario.
            </p>
          </div>
        </div>
      </div>

      <aside className="mv-sidebar">
        <ul>
          <li><a href="#" className="active">Secundaria</a></li>
          <li><Link to="/preescolar">Preescolar</Link></li>
          <li><Link to="/primaria">Primaria</Link></li>
          <li><Link to="/media-tecnica">Media Técnica</Link></li>
        </ul>
      </aside>
    </div>
  </section>

  
    </>
  );
};

export default Secundaria;
