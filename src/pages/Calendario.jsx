import { Link } from 'react-router-dom';

const Calendario = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Calendario</h1>
  </section>
  
  <section id="calendario-escolar" className="calendario-section">
    <div className="calendario-container-main">
      <div className="calendario-content">
        <h2 className="section-title">Calendario Escolar 2025</h2>
        <p className="section-subtitle">
          Consulta las fechas más importantes del año académico: inicio de clases, evaluaciones,
          actividades institucionales y recesos escolares.
        </p>
        
        <div className="calendario-grid">
          <div className="calendario-card">
            <h3>Inicio de Clases</h3>
            <p className="fecha">20 de Enero 2025</p>
            <p>
              Comienzo del primer periodo académico. Se dará la bienvenida a estudiantes y familias con actividades de integración.
            </p>
          </div>
          
          <div className="calendario-card">
            <h3>Semana Santa</h3>
            <p className="fecha">14 al 20 de Abril 2025</p>
            <p>
              Receso institucional con actividades culturales y reflexión espiritual en comunidad.
            </p>
          </div>
          
          <div className="calendario-card">
            <h3>Entrega de Boletines I Periodo</h3>
            <p className="fecha">10 de Mayo 2025</p>
            <p>
              Reunión de padres de familia para la socialización de logros y avances académicos del primer periodo.
            </p>
          </div>
          
          <div className="calendario-card">
            <h3>Semana de la Ciencia y la Cultura</h3>
            <p className="fecha">1 al 5 de Septiembre 2025</p>
            <p>
              Espacio para la exposición de proyectos académicos, artísticos y tecnológicos de los estudiantes.
            </p>
          </div>
          
          <div className="calendario-card">
            <h3>Cierre de Año Escolar</h3>
            <p className="fecha">28 de Noviembre 2025</p>
            <p>
              Clausura oficial del año lectivo y ceremonia de graduación de los grados finales.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
};

export default Calendario;
