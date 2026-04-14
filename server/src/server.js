import express from 'express';
import cors from 'cors';
import servicesRouter from './routes/services.js';
import testimonialsRouter from './routes/testimonials.js';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

app.use('/api/services', servicesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/contact', contactRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'MAX PIE API is running' });
});

app.listen(PORT, () => {
  console.log(`🦶 MAX PIE server running on http://localhost:${PORT}`);
});

export default app;
