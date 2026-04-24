import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Contacto</h1>
  </section>
  
  <section className="contacto" id="contacto">
    <div className="contacto-container">
      <h2>Contáctanos</h2>
      <p>Estamos aquí para resolver tus dudas y brindarte toda la información que necesites sobre nuestro colegio.</p>
      
      <div className="contacto-content">
        <div className="info-contacto">
          <h3>Información de contacto</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Calle 123 #45-67, Bogotá, Colombia</li>
            <li><i className="fas fa-phone"></i> +57 320 456 7890</li>
            <li><i className="fas fa-envelope"></i> info@colegioedutech.edu.co</li>
            <li><i className="fas fa-clock"></i> Lunes a Viernes: 7:00 AM - 4:00 PM</li>
          </ul>
        </div>

        <form className="formulario-contacto">
          <h3>Envíanos un mensaje</h3>
          <div className="input-group">
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
          </div>
          <input type="text" placeholder="Asunto" required />
            <textarea placeholder="Escribe tu mensaje..." rows="5" required></textarea>
            <button type="submit" className="btn-contacto">Enviar mensaje</button>
        </form>
      </div>
    </div>
  </section>

  
    </>
  );
};

export default Contacto;
