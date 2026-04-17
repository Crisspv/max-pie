import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Award, ArrowRight, Footprints } from 'lucide-react';
import '../styles/about.css';

interface AboutPreviewProps {
  aboutImage: string;
}

const Banner: React.FC = () => {
  return (
    <section className="banner banner--dark" id="banner-promo">
      <div className="banner__bg-pattern" />
      <div className="container">
        <div className="banner__content">
          <div className="banner__icon">
            <Footprints size={28} color="white" />
          </div>
          <h2 className="banner__title">
            Tu bienestar comienza <em>por tus pies</em>
          </h2>
          <p className="banner__text">
            En MAX PIE creemos que unos pies sanos son la base de una vida activa.
            Por eso, cada tratamiento está diseñado con la atención y el cuidado
            que mereces.
          </p>
          <div className="banner__actions">
            <a
              href="https://wa.me/5213329549876?text=Hola%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Agendar por WhatsApp
            </a>
            <a href="tel:3336169230" className="btn btn-white btn-lg">
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPreview: React.FC<AboutPreviewProps> = ({ aboutImage }) => {
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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: <ShieldCheck size={18} />, text: 'Instrumental 100% esterilizado' },
    { icon: <Heart size={18} />, text: 'Atención personalizada y cálida' },
    { icon: <Award size={18} />, text: 'Podólogos certificados y con experiencia' },
  ];

  return (
    <section className="about-preview section-padding" id="nosotros-preview" ref={sectionRef}>
      <div className="container">
        <div className="about-preview__grid">
          <div className="about-preview__image-wrapper animate-on-scroll">
            <img
              src={aboutImage}
              alt="Interior de MAX PIE clínica podológica"
              className="about-preview__image"
            />
            <div className="about-preview__image-accent" />
            <div className="about-preview__badge">
              <span className="about-preview__badge-number">5.0</span>
              <span className="about-preview__badge-text">
                Calificación<br />en Google
              </span>
            </div>
          </div>

          <div className="about-preview__content animate-on-scroll">
            <span className="label-text about-preview__label">Sobre Nosotros</span>
            <h2 className="heading-lg about-preview__title">
              Estamos a sus pies
            </h2>
            <p className="text-body about-preview__text">
              MAX PIE es una clínica podológica ubicada en Guadalajara, Jalisco,
              dedicada al cuidado integral de los pies. Con más de una década de
              experiencia, nuestro equipo de podólogos profesionales se especializa
              en ofrecer tratamientos de la más alta calidad, utilizando tecnología
              de vanguardia y un enfoque personalizado para cada paciente.
            </p>

            <div className="about-preview__features">
              {features.map((feature, index) => (
                <div className="about-preview__feature" key={index}>
                  <div className="about-preview__feature-icon">
                    {feature.icon}
                  </div>
                  <span className="about-preview__feature-text">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link to="/nosotros" className="btn btn-ghost">
              Conócenos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner, AboutPreview };
export default AboutPreview;
