import { RequestExt } from "../interfaces/req-ext.interface";
import { Response } from "express";
import UserModel from "../models/user.model";


//req ( informacion de la solicitud realizada por el cliente al servidor)
//res (respuesta que el servidor enviará al cliente)
const getUserInfo = async (req: RequestExt, res: Response) => {
    try {
        // Obtener información del usuario actual/autenticado desde req.user
        const { _id, email } = req.user as { _id: string , email: string};

        
        // Consulta en la BD para obtener detalles completos del usuario, ya que el token contiene el email del usuario como identificador unico
        const user = await UserModel.findOne({ email });  

        if (!user) {
            return res.status(404).json({ error: "Not found user" });
        }

        // Return información del usuario
        res.json({
            id: user._id,
            name: user.name,
            lastName: user.lastName,
            IdType: user.IdType,
            IdNumber: user.IdNumber,
            email: user.email,
            Rol: user.Rol,
        });

    } catch (error) {
        console.error('Error al obtener información del usuario', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export { getUserInfo }