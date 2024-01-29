import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext.interface";
import { verifyToken } from "../utils/jwt.handle";
import UserModel from "../models/user.model";

// checkJwt actúa como middleware.
// Toma tres parámetros: req (objeto de solicitud), res (objeto de respuesta) y next (función para pasar al siguiente middleware).
const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";   //1111     Obtención del token 
    console.log("token recibido en el middleware", jwtByUser);

    const jwt = jwtByUser.split(" ").pop();         //Extracción del token de la cadena del encabezado header
    if (!jwt) {
      console.log("No se encontró token en el encabezado");
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
      return;
    }

    const decodedToken = verifyToken(jwt);
    console.log("Contenido decodificado del token:", decodedToken); //sustraer info del token en un objecto json

    const isUser = decodedToken as { _id: string };  //extraer el id del usuario del token
    console.log("isUser", isUser);
    console.log("jwt", jwt);
    console.log("id enviado al backend", isUser._id);

    if (!isUser) {
      console.log("if !isUser", isUser);
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");  //si no hay información del usuario en el token
    } else {
      console.log("else", isUser);

      // Consulta en la BD un usuario con el correo electrónico correspondiente al _id del token.
      try {
        const user = await UserModel.findOne({ email: isUser._id }); 

        if (!user) {
          console.log("Usuario no encontrado en la base de datos");
          res.status(404).json({ error: "Not found user" });   ///bug
          return;
        }

        const userId = user._id;
        const userName = user.name;

        req.user = {
          // almacenamiento de información del usuario en el objeto de solicitud req.user 
          _id: userId,
          name: userName, 
        };

        next(); //paso al siguiente middleware
      } catch (error) {
        console.error("Error al consultar la base de datos:", error);
        res.status(500).send("Error del servidor al obtener detalles del usuario");
      }
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };