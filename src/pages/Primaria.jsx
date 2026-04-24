import { Link } from 'react-router-dom';

const Primaria = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Primaria</h1>
  </section>

  <section id="mision-vision" className="section-mv">
    <div className="mv-container">
      <div className="mv-content">
        <article id="mision" className="mv-box">
          <h2>Primaria</h2>
            <p>
              En <strong>EduTech</strong>, en el nivel <strong>Primaria</strong> fortalecemos las bases del aprendizaje con un enfoque dinámico e innovador.
              Buscamos que cada estudiante desarrolle sus competencias académicas, tecnológicas y sociales mediante experiencias educativas significativas, que combinan el conocimiento tradicional con el uso responsable de la tecnología.
              Nuestro modelo pedagógico promueve la curiosidad, la creatividad y el pensamiento crítico, integrando herramientas digitales y proyectos interdisciplinarios que despiertan el interés por descubrir, investigar y construir un futuro sostenible.
              En este nivel, formamos estudiantes autónomos, empáticos y comprometidos con su entorno, preparados para enfrentar los retos del mundo moderno con valores, responsabilidad y una sólida formación integral. 
            </p>
        </article>
        
        <div className="preescolar-features">
          <div className="feature">
            <i className="fas fa-puzzle-piece"></i>
            <h4>Aprendizaje Activo</h4>
              <p>Los estudiantes son protagonistas de su propio aprendizaje mediante proyectos, retos y experiencias interactivas.</p>
          </div>
          <div className="feature">
            <i className="fas fa-laptop-code"></i>
            <h4>Ciudadanía Global</h4>
            <p>Promovemos la conciencia ambiental, la sostenibilidad y el respeto por la diversidad cultural en un mundo interconectado.</p>
          </div>
          <div className="feature">
            <i className="fas fa-seedling"></i>
            <h4>competencias Digitales</h4>
            <p>Integración de herramientas tecnológicas y pensamiento computacional desde las primeras etapas escolares.</p>
          </div>
          <div className="feature">
            <i className="fas fa-hands-helping"></i>
            <h4>Valores y Convivencia</h4>
            <p>
              Fomentamos la empatía, el trabajo en equipo y la resolución pacífica
              de conflictos dentro y fuera del aula.
            </p>
          </div>
        </div>
      </div>

      <aside className="mv-sidebar">
        <ul>
          <li><a href="#" className="active">Primaria</a></li>
          <li><Link to="/preescolar">Preescolar</Link></li>
          <li><Link to="/secundaria">Secundaria</Link></li>
          <li><Link to="/media-tecnica">Media Técnica</Link></li>
        </ul>
      </aside>
    </div>
  </section>

  
    </>
  );
};

export default Primaria;
