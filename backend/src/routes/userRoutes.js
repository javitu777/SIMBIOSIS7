// Placeholder for userRoutes.jsimport express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  const { email, role } = req.body;

  if (!email || !role) {
    return res.status(400).json({ message: 'Faltan campos requeridos.' });
  }

  // Aquí podrías conectar con MongoDB y guardar el usuario si está listo.
  return res.status(200).json({ email, role });
});

export default router;
