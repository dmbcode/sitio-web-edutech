import { Link } from 'react-router-dom';

const MisionVision = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Misión y Visión</h1>
  </section>
  
  <section id="mision-vision" className="section-mv">
    <div className="mv-container">
      <div className="mv-content">
        <article id="mision" className="mv-box">
          <h2>Misión</h2>
          <p>
            En <strong>EduTech</strong> formamos estudiantes competentes y comprometidos con el desarrollo sostenible,
            integrando la innovación tecnológica, el pensamiento crítico y los valores humanos como base de su aprendizaje.
            Promovemos una educación integral que prepare a nuestros alumnos para afrontar los desafíos del futuro digital.
          </p>
        </article>

        <article id="vision" className="mv-box">
          <h2>Visión</h2>
          <p>
            Ser una institución educativa líder en la transformación digital, reconocida por su compromiso con la sostenibilidad,
            la excelencia académica y la formación de ciudadanos éticos capaces de aportar soluciones innovadoras a su entorno
            y al mundo.
          </p>
        </article>
      </div>

      <aside className="mv-sidebar">
        <ul>
          <li><a href="#" className="active">Misión y Visión</a></li>
          <li><Link to="/principios">Principios y Valores</Link></li>
          <li><Link to="/historia">Historia y Simbolos</Link></li>
          <li><Link to="/equipo">Equipo Directivo</Link></li>
        </ul>
      </aside>
    </div>
  </section>

  
    </>
  );
};

export default MisionVision;
