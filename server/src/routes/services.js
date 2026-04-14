import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const services = JSON.parse(readFileSync(join(__dirname, '../data/services.json'), 'utf-8'));

const router = Router();

router.get('/', (_req, res) => {
  res.json(services);
});

router.get('/featured', (_req, res) => {
  const featured = services.filter(s => s.featured);
  res.json(featured);
});

router.get('/:slug', (req, res) => {
  const service = services.find(s => s.slug === req.params.slug);
  if (!service) {
    res.status(404).json({ error: 'Servicio no encontrado' });
    return;
  }
  res.json(service);
});

export default router;
