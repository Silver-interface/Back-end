import {Router} from "express";
import { getUserInfo } from "../controllers/user.controller";
import { checkJwt } from "../middleware/session";

const userRouter = Router();

userRouter.get("/InfoUser", checkJwt, (req, res) => {
  //checjJwt se ejecutará antes de manejar la solicitud, verificanco autenticación del usuario mediante el token
    console.log("Ruta /InfoUser alcanzada");
    getUserInfo(req, res); //pasa objetos de solicitud y respuesta
  });

export {userRouter};