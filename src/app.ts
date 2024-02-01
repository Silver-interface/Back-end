import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import { userRouter } from './routes/user';
import db from "./config/mongo";




const PORT = process.env.PORT || 3002;
const app = express();
const corsOptions = {
    origin: 'http://localhost:3002',
    allowedHeaders: ['Authorization', 'Content-Type'], // Agrega 'Authorization' a los encabezados permitidos
  };
app.use(cors());
app.use(cors());
app.use(express.json());
app.use(router);
app.use('/user', userRouter);
db().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));

