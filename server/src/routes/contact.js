import { Router } from 'express';

const router = Router();

/**
 * @typedef {Object} ContactForm
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} [service]
 * @property {string} message
 */

router.post('/', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !message) {
    res.status(400).json({
      error: 'Todos los campos obligatorios deben ser completados',
      fields: {
        name: !name ? 'El nombre es requerido' : null,
        email: !email ? 'El email es requerido' : null,
        phone: !phone ? 'El teléfono es requerido' : null,
        message: !message ? 'El mensaje es requerido' : null,
      }
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'El formato del email no es válido' });
    return;
  }

  console.log('📧 New contact form submission:', { name, email, phone, service, message });

  res.json({
    success: true,
    message: '¡Gracias por contactarnos! Te responderemos a la brevedad.'
  });
});

export default router;
