import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
const PORT = process.env.PORT || 3001;
const app = express();
const corsOptions = {
    origin: 'https://front-end-opal-three.vercel.app',
    allowedHeaders: ['Authorization', 'Content-Type'], // Agrega 'Authorization' a los encabezados permitidos
  };
app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));

