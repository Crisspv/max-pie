import { Link } from 'react-router-dom';
import { Footprints, ArrowRight } from 'lucide-react';
import '../styles/footer.css';

const BookingCTA = () => {
  return (
    <section className="booking-cta" id="booking-cta">
      <div className="booking-cta__pattern" />
      <div className="container">
        <div className="booking-cta__content">
          <h2 className="booking-cta__title">
            ¿Listo para el primer paso?
          </h2>
          <p className="booking-cta__text">
            Agenda tu cita hoy y descubre la diferencia de un cuidado podológico
            profesional. Tu bienestar está a un paso de distancia.
          </p>
          <div className="booking-cta__actions">
            <Link to="/contacto" className="btn btn-white btn-lg">
              Agendar Cita
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/5213329549876?text=Hola%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              WhatsApp
            </a>
          </div>
          <p className="booking-cta__phone">
            O llámanos al <a href="tel:3336169230">33 3616 9230</a>
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <Footprints size={22} color="white" />
              </div>
              <span className="footer__logo-text">
                Max<span>Pie</span>
              </span>
            </div>
            <p className="footer__brand-text">
              Somos profesionales en cuidar tus pies. Clínica podológica con
              más de 10 años de experiencia en Guadalajara, Jalisco.
            </p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/MAXPIECIRCUNVALACION"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5213329549876"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__column-title">Servicios</h4>
            <div className="footer__links">
              <Link to="/servicios" className="footer__link">Podología Clínica</Link>
              <Link to="/servicios" className="footer__link">Uñas Encarnadas</Link>
              <Link to="/servicios" className="footer__link">Tratamiento de Hongos</Link>
              <Link to="/servicios" className="footer__link">Plantillas Personalizadas</Link>
              <Link to="/servicios" className="footer__link">Pie Diabético</Link>
            </div>
          </div>

          <div>
            <h4 className="footer__column-title">Clínica</h4>
            <div className="footer__links">
              <Link to="/nosotros" className="footer__link">Sobre Nosotros</Link>
              <Link to="/nosotros" className="footer__link">Nuestro Equipo</Link>
              <Link to="/contacto" className="footer__link">Ubicación</Link>
              <Link to="/contacto" className="footer__link">Agendar Cita</Link>
            </div>
          </div>

          <div>
            <h4 className="footer__column-title">Contacto</h4>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>
                Av. de los Arcos 268-A, Vallarta,<br />
                44120, Guadalajara, Jal.
              </span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>
                <a href="tel:3336169230" style={{ color: 'inherit' }}>33 3616 9230</a><br />
                <a href="https://wa.me/5213329549876" style={{ color: 'inherit' }}>33 2954 9876 (WhatsApp)</a>
              </span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>
                Lun - Vie: 8:00 AM - 6:30 PM<br />
                Sábado: 8:00 AM - 2:00 PM
              </span>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} MAX PIE. Todos los derechos reservados.</span>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Aviso de Privacidad</a>
            <a href="#" className="footer__bottom-link">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5213329549876?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20MAX%20PIE"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span className="whatsapp-float__tooltip">¡Escríbenos!</span>
    </a>
  );
};

export { BookingCTA, Footer, WhatsAppButton };
