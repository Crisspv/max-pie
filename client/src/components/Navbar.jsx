import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Footprints } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = mobileOpen ? '' : 'hidden';
  };

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Footprints size={22} color="white" />
          </div>
          <span className="navbar__logo-text">
            Max<span>Pie</span>
          </span>
        </Link>

        <div className="navbar__links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar__actions">
          <a
            href="https://wa.me/5213329549876"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__whatsapp"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <Link to="/contacto" className="btn btn-primary btn-sm">
            Agendar Cita
          </Link>
        </div>

        <button
          className={`navbar__toggle ${mobileOpen ? 'open' : ''}`}
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <div className={`navbar__mobile-menu ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="navbar__mobile-link"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5213329549876"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
