import express from "express";

const router = express.Router();

// Ruta de prueba
router.post("/register", (req, res) => {
  const { email, role } = req.body;

  if (!email || !role) {
    return res.status(400).json({ message: "Email y role son obligatorios" });
  }

  // Simulación de registro exitoso
  return res.status(201).json({ email, role });
});

export default router;
