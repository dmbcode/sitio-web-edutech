import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-edutech">
      <div className="footer-social">
        <h2>Síguenos en nuestras redes sociales</h2>
        <div className="social-icons">
          <a href="#"><img className="social-icon" src="/img/logo-facebook.svg" alt="Facebook" /></a>
          <a href="#"><img className="social-icon" src="/img/logo-youtube.svg" alt="YouTube" /></a>
          <a href="#"><img className="social-icon" src="/img/logo-tiktok.svg" alt="TikTok" /></a>
          <a href="#"><img className="social-icon" src="/img/logo-instagram.svg" alt="Instagram" /></a>
        </div>
        <hr />
      </div>
      
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/img/logo-edutech.png" alt="Logo EduTech" />
          <p>
            <strong>EduTech</strong> es una institución educativa comprometida con la
            formación digital, humana y sostenible, ubicada en la ciudad de Ibagué.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Accesos directos</h4>
          <ul>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Política de privacidad</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Enlaces de interés</h4>
          <ul>
            <li><Link to="/admision">Admisiones</Link></li>
            <li><a href="#">Preinscripción en línea</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Contáctanos</h4>
          <ul>
            <li><Link to="/contacto">Directorio de contacto</Link></li>
            <li><a href="#">Trabaja con nosotros</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 EduTech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
