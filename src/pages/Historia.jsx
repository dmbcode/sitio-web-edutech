import { Link } from 'react-router-dom';

const Historia = () => {
  return (
    <>
      <section id="inicio" className="hero-banner">
        <h1>Historia y Simbolos</h1>
      </section>

      <section id="mision-vision" className="section-mv">
        <div className="mv-container">

          {/*  Contenido principal  */}
          <div className="mv-content">
            <article id="mision" className="mv-box">
              <h2>Nuestra Historia</h2>
              <p>
                <strong>EduTech</strong> nació con la visión de transformar la educación tradicional en una experiencia moderna,
                tecnológica y humana. Fundado en el año <strong>2010</strong>, el colegio inició como un pequeño proyecto educativo
                con el propósito de integrar la innovación digital en el proceso de aprendizaje de niños y jóvenes.
              </p>

              <p>
                A lo largo de los años, EduTech ha crecido consolidando una comunidad académica comprometida con la
                <strong>excelencia, la sostenibilidad y el desarrollo humano</strong>. Su modelo educativo combina el uso responsable
                de la tecnología con la formación en valores, promoviendo una enseñanza centrada en el estudiante y en la construcción
                de un futuro consciente y colaborativo.
              </p>

              <p>
                Hoy, EduTech es reconocido por su enfoque integral, que equilibra la
                <strong>educación científica y tecnológica</strong> con la <strong>formación ética, ambiental y social</strong>,
                preparando a los estudiantes para ser ciudadanos del mundo digital y agentes de cambio positivo en la sociedad.
              </p>
            </article>

            <article id="vision" className="mv-box">
              <h2>Simbolos Institucionales</h2>
              <p>
                Los símbolos institucionales de <strong>EduTech</strong> reflejan nuestra identidad, principios y compromiso con la
                formación integral, tecnológica y sostenible de nuestros estudiantes.
              </p>
              <br />
              <br />
              <h3>Escudo Institucional</h3>
              <p>
                Representa la unión entre el conocimiento, la tecnología y la sostenibilidad.  
                Su diseño minimalista simboliza la innovación educativa y el crecimiento del aprendizaje.
              </p>
              <br />
              <br />
              <h3>Bandera del Colegio</h3>
              <p>
                Compuesta por dos franjas: azul y verde.  
                El azul representa la sabiduría, la confianza y la ciencia; el verde, la esperanza, el desarrollo sostenible y la vida.
              </p>
              <br />
              <br />
              <h3>Himno Institucional</h3>
              <p>
                El himno exalta los valores de respeto, conocimiento y superación.  
                Invita a cada estudiante a construir un futuro digital con responsabilidad y humanidad.
              </p>
              <audio controls>
                <source src="audio/himno-edutech.mp3" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </article>
          </div>

          <aside className="mv-sidebar">
            <ul>
              <li><a href="#" className="active">Historia y Simbolos</a></li>
              <li><Link to="/mision-vision">Misión y Visión</Link></li>
              <li><Link to="/principios">Principios y Valores</Link></li>
              <li><Link to="/equipo">Equipo Directivo</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </>
  );
};

export default Historia;
