import { Link } from 'react-router-dom';

const Proyectos = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Proyectos Académicos</h1>
  </section>

  <section id="proyectos-academicos" className="section-proyectos">
    <div className="proyectos-container">
      <h2>Proyectos Académicos</h2>
      <p className="intro">
        En <strong>EduTech</strong> fomentamos el aprendizaje basado en proyectos, donde los estudiantes aplican sus
        conocimientos en experiencias reales que promueven la creatividad, la innovación y el trabajo en equipo.
      </p>

      <div className="proyectos-grid">
        <div className="proyecto-card">
          <img src="img/proyecto1.jpg" alt="Proyecto de Robótica Escolar" />
          <div className="card-content">
            <h3>Robótica Escolar</h3>
            <p>
              Estudiantes de diferentes niveles construyen robots educativos, aprendiendo sobre programación,
              mecánica y trabajo colaborativo.
            </p>
            <a href="#" className="btn-proyecto">Ver más</a>
          </div>
        </div>

        <div className="proyecto-card">
          <img src="img/proyecto2.jpg" alt="Huerta Sostenible" />
          <div className="card-content">
            <h3>Huerta Sostenible</h3>
            <p>
              Un proyecto ecológico que promueve la sostenibilidad y el cuidado del medio ambiente a través del cultivo responsable.
            </p>
            <a href="#" className="btn-proyecto">Ver más</a>
          </div>
        </div>

        <div className="proyecto-card">
          <img src="img/proyecto3.jpg" alt="EduTech Labs" />
          <div className="card-content">
          <h3>EduTech Labs</h3>
            <p>
              Laboratorio de innovación tecnológica donde los estudiantes desarrollan apps, sitios web y soluciones digitales.
            </p>
            <a href="#" className="btn-proyecto">Ver más</a>
          </div>
        </div>

        <div className="proyecto-card">
          <img src="img/proyecto4.jpg" alt="Feria del Conocimiento" />
          <div className="card-content">
            <h3>Feria del Conocimiento</h3>
            <p>
              Espacio anual donde los estudiantes presentan sus proyectos científicos, tecnológicos y sostenibles ante la comunidad educativa.
            </p>
            <a href="#" className="btn-proyecto">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
};

export default Proyectos;
