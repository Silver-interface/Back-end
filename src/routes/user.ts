import {Router} from "express";
import { getUserInfo } from "../controllers/user.controller";
import { checkJwt } from "../middleware/session";


const router = Router();

router.get("/User", checkJwt, (req, res) => {
  //checkJwt se ejecutará antes de manejar la solicitud, verificando autenticación del usuario mediante el token
    console.log("Ruta /User alcanzada");
    getUserInfo(req, res); //pasa objetos de solicitud y respuesta
  });

export { router };