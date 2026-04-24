import { Link } from 'react-router-dom';

const Admision = () => {
  return (
    <>


  <section id="inicio" className="hero-banner">
    <h1>Admisiones</h1>
  </section>
  
  <section id="formulario-admision" className="formulario-admision">
    <div className="formulario-container">
      <h2>Formulario de Admisiones</h2>
      <p>Completa el siguiente formulario y vive la experiencia de estudiar en <strong>EduTech</strong>.</p>
      
      <form className="admision-form">
        <div className="form-group">
          <label for="nombre">Nombre completo</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre completo" required />
        </div>
        
        <div className="form-group">
          <label for="correo">Correo electrónico</label>
          <input type="email" id="correo" name="correo" placeholder="ejemplo@correo.com" required />
        </div>
        
        <div className="form-group">
          <label for="telefono">Teléfono de contacto</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su número de contacto" required />
        </div>
        
        <div className="form-group">
          <label for="grado">Grado al que aspira</label>
          <select id="grado" name="grado" required>
            <option value="">Seleccione una opción</option>
            <option value="preescolar">Preescolar</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="media">Media Técnica</option>
          </select>
        </div>
        
        <div className="form-group">
          <label for="mensaje">Mensaje adicional</label>
          <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escriba un mensaje o consulta..."></textarea>
        </div>
        
        <button type="submit" className="btn-enviar">Enviar solicitud</button>
      </form>
    </div>
  </section>
  
  
    </>
  );
};

export default Admision;
