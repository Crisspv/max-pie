import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import '../styles/hero.css';

interface HeroProps {
  heroImage: string;
}

const Hero: React.FC<HeroProps> = ({ heroImage }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img
          src={heroImage}
          alt="Tratamiento podológico profesional en MAX PIE"
          className="hero__bg-image"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Podología profesional en Guadalajara
        </div>

        <h1 className="hero__title">
          Tus pies merecen <em>lo mejor</em>
        </h1>

        <p className="hero__subtitle">
          Somos profesionales en cuidar tus pies. Más de 10 años brindando
          atención podológica de calidad con tecnología de vanguardia.
        </p>

        <div className="hero__actions">
          <Link to="/contacto" className="btn btn-primary btn-lg">
            Agendar Cita
            <ArrowRight size={18} />
          </Link>
          <Link to="/servicios" className="btn btn-ghost btn-lg" style={{ borderColor: 'white', color: 'white' }}>
            Nuestros Servicios
          </Link>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-number">5.0</div>
            <div className="hero__stat-label">
              <Star size={12} fill="var(--color-gold)" color="var(--color-gold)" style={{ display: 'inline', verticalAlign: 'middle' }} /> Calificación Google
            </div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number">10+</div>
            <div className="hero__stat-label">Años de experiencia</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number">1K+</div>
            <div className="hero__stat-label">Pacientes atendidos</div>
          </div>
        </div>
      </div>

      <div className="hero__decor">
        <div className="hero__decor-circle" />
      </div>
    </section>
  );
};

export default Hero;
