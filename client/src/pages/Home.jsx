import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { Banner, AboutPreview } from '../components/About';
import Testimonials from '../components/Testimonials';
import { BookingCTA } from '../components/Footer';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const serviceImages = {
  'podologia-clinica': '/images/service-podologia.png',
  'unas-encarnadas': '/images/service-unas.png',
  'tratamiento-hongos': '/images/service-hongos.png',
  'plantillas-personalizadas': '/images/service-plantillas.png',
  'default': '/images/service-podologia.png',
};

const Home = () => {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Error loading services:', err));

    fetch(`${API_URL}/testimonials`)
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error('Error loading testimonials:', err));
  }, []);

  return (
    <main>
      <Hero heroImage="/images/hero.png" />
      <Services services={services} serviceImages={serviceImages} />
      <Banner />
      <AboutPreview aboutImage="/images/about-clinic.png" />
      <Testimonials testimonials={testimonials} />
      <BookingCTA />
    </main>
  );
};

export default Home;
