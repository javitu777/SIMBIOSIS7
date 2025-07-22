 import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
