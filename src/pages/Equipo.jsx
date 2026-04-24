import { Link } from 'react-router-dom';

const Equipo = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Equipo Directivo</h1>
  </section>

  <section id="euipodirectivo" className="section-ed">
    <div className="ed-container">
      {/*  Contenido principal  */}
      <div className="ed-content">
        <article id="equipo" className="ed-box">
          <h2>Nuestro Equipo Directivo</h2>
          <p>
          En <strong>EduTech</strong> contamos con un equipo directivo comprometido con la excelencia,
          la innovación pedagógica y la formación integral de nuestros estudiantes.
          </p>
        </article>

        <div className="preescolar-features">
          <div className="feature">
            <i className="fas fa-puzzle-piece"></i>
            <img src="img/directora.jpg" alt="Directora general" />
            <h3>María Fernanda López</h3>
            <h4>Rectora General</h4>
            <p>
              Lidera la visión institucional con enfoque en la transformación digital y
              el desarrollo sostenible, promoviendo una educación inclusiva y de calidad.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-laptop-code"></i>
            <img src="img/coordinador-academico.jpg" alt="Coordinador académico" />
            <h3>Carlos Andrés Mejía</h3>
            <h4>Coordinador Académico</h4>
            <p>
              Encargado de fortalecer los procesos pedagógicos mediante estrategias
              innovadoras y el uso de herramientas tecnológicas.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-seedling"></i>
            <img src="img/coordinadora-convivencia.jpg" alt="Coordinadora de convivencia" />
            <h3>Laura Sofía Ramírez</h3>
            <h4>Coordinadora de Convivencia</h4>
            <p>
              Promueve un ambiente armónico basado en el respeto, la empatía y los valores
              humanos que identifican a nuestra comunidad educativa.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <img src="img/director-tecnico.jpg" alt="Director técnico" />
            <h3>Juan Pablo Torres</h3>
            <h4>Director de Innovación Tecnológica</h4>
            <p>
              Implementa soluciones digitales para potenciar el aprendizaje y mejorar los
              procesos administrativos del colegio.
            </p>
          </div>
        </div>
      </div>

      <aside className="mv-sidebar">
        <ul>
          <li><a href="#" className="active">Equipo Directivo</a></li>
          <li><Link to="/mision-vision">Misión y Visión</Link></li>
          <li><Link to="/principios">Principios y Valores</Link></li>
          <li><Link to="/historia">Historia y Simbolos</Link></li>
        </ul>
      </aside>
    </div>
  </section>

  
    </>
  );
};

export default Equipo;
