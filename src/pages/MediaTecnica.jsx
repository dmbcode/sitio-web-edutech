import { Link } from 'react-router-dom';

const MediaTecnica = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Media Técnica</h1>
  </section>

  <section id="mision-vision" className="section-mv">
    <div className="mv-container">
      <div className="mv-content">
        <article id="mision" className="mv-box">
          <h2>Media Técnica</h2>
          <p>
          El nivel <strong>Media Técnica</strong> en <strong>EduTech</strong> prepara a los estudiantes para el mundo laboral y la educación superior mediante una formación integral que combina el conocimiento académico con la práctica tecnológica.
          Nuestro modelo promueve la innovación, la investigación y el emprendimiento, impulsando el desarrollo de competencias digitales, empresariales y sostenibles.
          A través de proyectos reales, los jóvenes aplican sus conocimientos en contextos productivos, desarrollando habilidades técnicas, liderazgo y responsabilidad social.
          En EduTech, la Media Técnica no solo forma profesionales competentes, sino también ciudadanos éticos y creativos, capaces de transformar su entorno con tecnología, sostenibilidad y propósito.
          </p>
        </article>

        <div className="preescolar-features">
          <div className="feature">
            <i className="fas fa-puzzle-piece"></i>
            <h4>Formación Tecnológica</h4>
            <p>
              Preparamos a los estudiantes en áreas como programación, diseño web, robótica y análisis de datos para su proyección profesional.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-laptop-code"></i>
            <h4>Innovación y Emprendimiento</h4>
            <p>
              Promovemos la creatividad y la creación de soluciones digitales sostenibles a través de proyectos de emprendimiento escolar.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-seedling"></i>
            <h4>Proyección Laboral</h4>
            <p>
              Facilitamos la articulación con empresas y programas técnicos, brindando experiencia y orientación vocacional desde el aula.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-leaf"></i>
            <h4>Compromiso Sostenible</h4>
            <p>
              Fomentamos la responsabilidad ambiental y el uso consciente de la tecnología como parte de un desarrollo equilibrado y humano.
            </p>
          </div>
        </div>
      </div>

      <aside className="mv-sidebar">
        <ul>
          <li><a href="#" className="active">Media Técnica</a></li>
          <li><Link to="/preescolar">Preescolar</Link></li>
          <li><Link to="/primaria">Primaria</Link></li>
          <li><Link to="/secundaria">Secundaria</Link></li>
        </ul>
      </aside>
    </div>
  </section>

  
    </>
  );
};

export default MediaTecnica;
