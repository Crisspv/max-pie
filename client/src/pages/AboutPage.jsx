import { useEffect, useRef } from 'react';
import { Heart, ShieldCheck, Award, Users, Stethoscope, GraduationCap } from 'lucide-react';
import { BookingCTA } from '../components/Footer';
import '../styles/pages.css';

const values = [
  { icon: <Heart size={28} />, title: 'Pasión por el cuidado', description: 'Cada paciente es único y merece una atención personalizada. Nos apasiona transformar vidas a través del cuidado de los pies.' },
  { icon: <ShieldCheck size={28} />, title: 'Seguridad e higiene', description: 'Utilizamos instrumental 100% esterilizado y seguimos protocolos estrictos de higiene para garantizar tu seguridad en cada visita.' },
  { icon: <Award size={28} />, title: 'Excelencia profesional', description: 'Nuestro equipo está en constante actualización, asistiendo a congresos y capacitaciones para ofrecerte lo mejor de la podología.' },
  { icon: <Users size={28} />, title: 'Atención humanizada', description: 'Creemos en crear un ambiente cálido y de confianza donde cada paciente se sienta escuchado y cuidado.' },
  { icon: <Stethoscope size={28} />, title: 'Tecnología avanzada', description: 'Invertimos en equipos de última generación para ofrecer diagnósticos precisos y tratamientos efectivos.' },
  { icon: <GraduationCap size={28} />, title: 'Educación al paciente', description: 'Te enseñamos a cuidar tus pies en casa y a prevenir problemas futuros. Tu bienestar es nuestro objetivo.' },
];

const AboutPage = () => {
  const sectionRef = useRef(null);

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
      sectionRef.current?.querySelectorAll('.animate-on-scroll')
        .forEach((el) => observer.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <main ref={sectionRef}>
      <section className="about-page__hero">
        <div className="container">
          <h1 className="about-page__hero-title">Sobre Nosotros</h1>
          <p className="about-page__hero-subtitle">
            Conoce la historia detrás de MAX PIE y nuestro compromiso con la salud de tus pies.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="about-page__story animate-on-scroll">
            <img src="/images/about-clinic.png" alt="Clínica MAX PIE" className="about-page__story-image" />
            <div>
              <span className="label-text" style={{ display: 'inline-block', marginBottom: '1rem' }}>Nuestra Historia</span>
              <h2 className="about-page__story-title">Estamos a sus pies</h2>
              <p className="about-page__story-text">
                MAX PIE nació con una misión clara: brindar atención podológica de la más alta calidad en Guadalajara.
                Lo que comenzó como un pequeño consultorio se ha transformado en una clínica de referencia en el cuidado profesional de los pies.
              </p>
              <p className="about-page__story-text">
                Con más de una década de experiencia, hemos atendido a miles de pacientes, ayudándoles a mejorar su calidad de vida
                a través de tratamientos especializados. Nuestro equipo de podólogos certificados combina conocimiento clínico con un
                trato humano y cálido que nos distingue.
              </p>
              <p className="about-page__story-text">
                Ubicados en la zona de Vallarta en Guadalajara, nuestra clínica cuenta con instalaciones modernas y equipamiento de
                última generación. Desde podología clínica hasta la fabricación de plantillas personalizadas, ofrecemos soluciones
                integrales para cada necesidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page__values section-padding">
        <div className="container">
          <div className="about-page__values-header animate-on-scroll">
            <span className="label-text" style={{ display: 'inline-block', marginBottom: '1rem' }}>Nuestros Valores</span>
            <h2 className="heading-lg">Lo que nos define</h2>
          </div>
          <div className="about-page__values-grid">
            {values.map((value, index) => (
              <div className={`about-page__value-card animate-on-scroll stagger-${index + 1}`} key={index}>
                <div className="about-page__value-icon">{value.icon}</div>
                <h3 className="about-page__value-title">{value.title}</h3>
                <p className="about-page__value-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </main>
  );
};

export default AboutPage;
