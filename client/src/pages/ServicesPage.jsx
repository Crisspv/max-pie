import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { BookingCTA } from '../components/Footer';
import '../styles/pages.css';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const serviceImages = {
  'podologia-clinica': '/images/service-podologia.png',
  'unas-encarnadas': '/images/service-unas.png',
  'tratamiento-hongos': '/images/service-hongos.png',
  'plantillas-personalizadas': '/images/service-plantillas.png',
  'pie-diabetico': '/images/service-podologia.png',
  'callosidades': '/images/service-unas.png',
  'reflexologia': '/images/service-plantillas.png',
  'estudio-biomecanico': '/images/service-hongos.png',
};

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const servicesRef = useRef(null);

  useEffect(() => {
    fetch(`${API_URL}/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Error loading services:', err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const timer = setTimeout(() => {
      servicesRef.current?.querySelectorAll('.animate-on-scroll')
        .forEach((el) => observer.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [services]);

  return (
    <main>
      <section className="services-page__hero">
        <div className="container">
          <span className="label-text services-page__hero-label">Catálogo Completo</span>
          <h1 className="services-page__hero-title">Nuestros Servicios</h1>
          <p className="services-page__hero-subtitle">
            Cada tratamiento está diseñado para brindarte el máximo cuidado
            y bienestar que tus pies merecen.
          </p>
        </div>
      </section>

      <section className="section-padding" ref={servicesRef}>
        <div className="container">
          {services.map((service) => (
            <div className="service-detail animate-on-scroll" key={service.id} id={service.slug}>
              <img
                src={serviceImages[service.slug] || '/images/service-podologia.png'}
                alt={service.name}
                className="service-detail__image"
              />
              <div className="service-detail__content">
                <h2 className="service-detail__name">{service.name}</h2>
                <p className="service-detail__desc">{service.description}</p>
                <div className="service-detail__meta">
                  <div className="service-detail__meta-item">
                    <span className="service-detail__meta-label">Precio</span>
                    <span className="service-detail__meta-value">${service.price} MXN</span>
                  </div>
                  <div className="service-detail__meta-item">
                    <span className="service-detail__meta-label">Duración</span>
                    <span className="service-detail__meta-value">
                      <Clock size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                      {service.duration}
                    </span>
                  </div>
                </div>
                <Link to="/contacto" className="btn btn-primary">
                  Agendar este servicio <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BookingCTA />
    </main>
  );
};

export default ServicesPage;
