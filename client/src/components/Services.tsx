import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Footprints, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import '../styles/services.css';

interface Service {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  price: number;
  duration: string;
  icon: string;
  featured: boolean;
}

interface ServicesProps {
  services: Service[];
  showAll?: boolean;
  serviceImages: Record<string, string>;
}

const iconMap: Record<string, React.ReactNode> = {
  'foot-prints': <Footprints size={18} />,
  'shield-check': <ShieldCheck size={18} />,
  'sparkles': <Sparkles size={18} />,
  'layers': <Layers size={18} />,
};

const Services: React.FC<ServicesProps> = ({ services, showAll = false, serviceImages }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Small delay to let newly-rendered cards be available in DOM
    const timer = setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
      elements?.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [services]);

  const displayedServices = showAll ? services : services.filter(s => s.featured);

  return (
    <section className="services section-padding" id="servicios" ref={sectionRef}>
      <div className="container">
        <div className="services__header animate-on-scroll">
          <span className="label-text services__label">Nuestros Servicios</span>
          <h2 className="heading-lg services__title">
            Cuidado experto para tus pies
          </h2>
          <p className="text-body services__subtitle">
            Ofrecemos una amplia gama de tratamientos podológicos con la más alta
            calidad y profesionalismo.
          </p>
        </div>

        <div className="services__grid">
          {displayedServices.map((service, index) => (
            <Link
              to={`/servicios#${service.slug}`}
              key={service.id}
              className={`service-card animate-on-scroll stagger-${index + 1}`}
            >
              <div className="service-card__image">
                <img
                  src={serviceImages[service.slug] || serviceImages['default']}
                  alt={service.name}
                  className="service-card__img"
                />
                <div className="service-card__overlay" />
                <div className="service-card__icon-badge">
                  {iconMap[service.icon] || <Footprints size={18} />}
                </div>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__name">{service.name}</h3>
                <p className="service-card__desc">{service.shortDescription}</p>
                <div className="service-card__footer">
                  <span className="service-card__price">${service.price} MXN</span>
                  <span className="service-card__duration">
                    <Clock size={14} />
                    {service.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="services__cta animate-on-scroll">
            <Link to="/servicios" className="btn btn-ghost">
              Ver todos los servicios
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
