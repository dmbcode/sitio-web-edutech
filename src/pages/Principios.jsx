import { Link } from 'react-router-dom';

const Principios = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Principios y Valores</h1>
  </section>
  
  <section id="mision-vision" className="section-mv">
    <div className="mv-container">
      <div className="mv-content">
        <article id="mision" className="mv-box">
          <h2>Principios Institucionales</h2>
          <p>
            <strong>1. Innovación educativa:</strong> Fomentamos el uso creativo de la tecnología como herramienta para el aprendizaje, la resolución de problemas y la transformación social. <br /><br />
            <strong>2. Sostenibilidad:</strong> Promovemos el respeto por el medio ambiente y la adopción de hábitos responsables que contribuyan al desarrollo sostenible del planeta. <br /><br />
            <strong>3. Equidad e inclusión:</strong> Garantizamos oportunidades de aprendizaje para todos, valorando la diversidad y fomentando la participación sin discriminación. <br /><br />
            <strong>4. Formación integral:</strong> Desarrollamos en nuestros estudiantes las dimensiones académica, humana, social y emocional para un crecimiento equilibrado. <br /><br />
            <strong>5. Responsabilidad y compromiso:</strong> Impulsamos la disciplina, la ética y el sentido del deber como pilares del desarrollo personal y comunitario. <br /><br />
            <strong>6. Aprendizaje continuo:</strong>Creemos en la educación como un proceso permanente que evoluciona con la sociedad y las tecnologías.
          </p>
        </article>

        <article id="vision" className="mv-box">
          <h2>Valores Institucionales</h2>
          <p>
            <strong>Respeto:</strong> base de toda convivencia armónica y solidaria. <br /><br />
            <strong>Responsabilidad:</strong> compromiso con nuestras acciones y decisiones. <br /><br />
            <strong>Honestidad:</strong> actuar con transparencia y coherencia en cada ámbito. <br /><br />
            <strong>Solidaridad:</strong> apoyo mutuo y empatía hacia los demás. <br /><br />
            <strong>Trabajo en equipo:</strong> colaboración para alcanzar metas comunes. <br /><br />
            <strong>Creatividad:</strong> búsqueda constante de nuevas ideas y soluciones. <br /><br />
            <strong>Perseverancia:</strong> esfuerzo continuo para superar los desafíos. <br /><br />
            <strong>Compromiso con la innovación:</strong> apertura al cambio y mejora constante mediante la tecnología.
          </p>
        </article>
      </div>

      <aside className="mv-sidebar">
        <ul>
          <li><a href="#" className="active">Principios y Valores</a></li>
          <li><Link to="/mision-vision">Misión y Visión</Link></li>
          <li><Link to="/historia">Historia y Simbolos</Link></li>
          <li><Link to="/equipo">Equipo Directivo</Link></li>
        </ul>
      </aside>
    </div>
  </section>

  
    </>
  );
};

export default Principios;
