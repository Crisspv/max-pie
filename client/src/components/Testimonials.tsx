import { useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 360;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="testimonials section-padding" id="testimonios" ref={sectionRef}>
      <div className="container">
        <div className="testimonials__header animate-on-scroll">
          <span className="label-text testimonials__label">Testimonios</span>
          <h2 className="heading-lg testimonials__title">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-body testimonials__subtitle">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa.
          </p>
        </div>

        <div className="testimonials__carousel" ref={carouselRef}>
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <span className="testimonial-card__quote">"</span>
              <div className="testimonial-card__stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--color-gold)"
                    className="testimonial-card__star"
                  />
                ))}
              </div>
              <p className="testimonial-card__comment">
                "{testimonial.comment}"
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {getInitials(testimonial.name)}
                </div>
                <div className="testimonial-card__info">
                  <span className="testimonial-card__name">{testimonial.name}</span>
                  <span className="testimonial-card__service">{testimonial.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__nav">
          <button
            className="testimonials__nav-btn"
            onClick={() => scroll('left')}
            aria-label="Anterior testimonio"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="testimonials__nav-btn"
            onClick={() => scroll('right')}
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
