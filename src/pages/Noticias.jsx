import { Link } from 'react-router-dom';

const Noticias = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Noticias</h1>
  </section>

  <section className="noticias" id="noticias">
    <div className="noticias-container">
      <h2>Noticias y Actualidad</h2>
      <p>Mantente informado sobre los eventos, logros y actividades más recientes de nuestro colegio.</p>
      <div className="noticias-grid">
        <article className="noticia-card">
          <img src="img/noticia1.jpg" alt="Feria de Ciencias 2025" />
          <div className="noticia-content">
            <h3>Feria de Ciencias 2025</h3>
            <p>Nuestros estudiantes demostraron su creatividad e innovación en la Feria de Ciencias, presentando proyectos de impacto ambiental y tecnológico.</p>
            <a href="#" className="btn-noticia">Leer más</a>
          </div>
        </article>
            
        <article className="noticia-card">
          <img src="img/noticia2.jpg" alt="Día de la Familia" />
          <div className="noticia-content">
            <h3>Día de la Familia</h3>
              <p>Celebramos una jornada llena de unión, juegos y valores que fortalecen el vínculo entre la comunidad educativa y las familias.</p>
              <a href="#" className="btn-noticia">Leer más</a>
          </div>
        </article>
            
        <article className="noticia-card">
          <img src="img/noticia3.jpg" alt="Reconocimiento académico" />
            <div className="noticia-content">
              <h3>Reconocimiento Académico</h3>
                <p>Felicitamos a nuestros estudiantes destacados por su compromiso y excelencia en el año escolar 2025.</p>
                <a href="#" className="btn-noticia">Leer más</a>
            </div>
        </article>
      </div>
    </div>
  </section>
  
  
    </>
  );
};

export default Noticias;
