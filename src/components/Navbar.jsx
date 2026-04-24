import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName, event) => {
    event.preventDefault();
    setActiveDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };

  const handleMenuToggle = () => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setActiveDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Colegio <span>EduTech</span></div>
        <button 
          className="menu-toggle" 
          id="menu-toggle" 
          onClick={handleMenuToggle}
        >
          &#9776;
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li className={`dropdown ${activeDropdown === 'institucional' ? 'active' : ''}`}>
            <a href="#" onClick={(event) => toggleDropdown('institucional', event)}>Institucional ▾</a>
            <ul className="submenu">
              <li><Link to="/mision-vision" onClick={closeMenu}>Misión y Visión</Link></li>
              <li><Link to="/principios" onClick={closeMenu}>Principios y valores</Link></li>
              <li><Link to="/historia" onClick={closeMenu}>Historia y Simbolos</Link></li>
              <li><Link to="/equipo" onClick={closeMenu}>Equipo Directivo</Link></li>
            </ul>
          </li>
          <li className={`dropdown ${activeDropdown === 'academico' ? 'active' : ''}`}>
            <a href="#" onClick={(event) => toggleDropdown('academico', event)}>Académico ▾</a>
            <ul className="submenu">
              <li><Link to="/preescolar" onClick={closeMenu}>Preescolar</Link></li>
              <li><Link to="/primaria" onClick={closeMenu}>Primaria</Link></li>
              <li><Link to="/secundaria" onClick={closeMenu}>Secundaria</Link></li>
              <li><Link to="/media-tecnica" onClick={closeMenu}>Media Técnica</Link></li>
              <li><Link to="/proyectos" onClick={closeMenu}>Proyectos Académicos</Link></li>
              <li><Link to="/calendario" onClick={closeMenu}>Calendario Escolar</Link></li>
            </ul>
          </li>
          <li><Link to="/noticias" onClick={closeMenu}>Noticias</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
