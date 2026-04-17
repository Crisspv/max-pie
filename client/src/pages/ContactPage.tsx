import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import '../styles/pages.css';

const API_URL = import.meta.env.VITE_API_URL || '/api';

interface Service {
  id: number;
  name: string;
  slug: string;
}

const ContactPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Error loading services:', err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="contact-page__hero">
        <div className="container">
          <h1 className="contact-page__hero-title">Contáctanos</h1>
          <p className="contact-page__hero-subtitle">
            Estamos listos para atenderte. Agenda tu cita o envíanos tu consulta.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contact-page__grid">
            <div className="contact-page__form-wrapper">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={48} className="form-success__icon" />
                  <h3 className="form-success__title">¡Mensaje enviado!</h3>
                  <p className="form-success__text">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="contact-page__form-title">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Nombre completo *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Correo electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Teléfono *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="33 1234 5678"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="service">Servicio de interés</label>
                      <select
                        id="service"
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona un servicio (opcional)</option>
                        {services.map(s => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Mensaje *</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="¿En qué podemos ayudarte?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%' }}
                      disabled={loading}
                    >
                      {loading ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="contact-page__info">
              <div className="contact-page__info-card">
                <h3 className="contact-page__info-title">Información de contacto</h3>

                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-page__info-label">Dirección</div>
                    <div className="contact-page__info-value">
                      Av. de los Arcos 268-A, Vallarta,<br />
                      44120, Guadalajara, Jal.
                    </div>
                  </div>
                </div>

                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-page__info-label">Teléfono</div>
                    <div className="contact-page__info-value">
                      <a href="tel:3336169230" style={{ color: 'inherit' }}>33 3616 9230</a>
                    </div>
                  </div>
                </div>

                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="contact-page__info-label">WhatsApp</div>
                    <div className="contact-page__info-value">
                      <a
                        href="https://wa.me/5213329549876"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                      >
                        33 2954 9876
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="contact-page__info-label">Horario</div>
                    <div className="contact-page__info-value">
                      Lunes a Viernes: 8:00 AM - 6:30 PM<br />
                      Sábado: 8:00 AM - 2:00 PM<br />
                      Domingo: Cerrado
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-page__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5!2d-103.3849731!3d20.6703307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae73a0e74b7b%3A0x363bc1a722fc209a!2sMAX%20PIE!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de MAX PIE en Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
