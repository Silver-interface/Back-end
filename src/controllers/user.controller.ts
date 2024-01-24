import { RequestExt } from "../interfaces/req-ext.interface";
import { Response } from "express";
import UserModel from "../models/user.model";

const getUserInfo = async (req: RequestExt, res: Response) => {
    try {
        //obtener información del usuario actual/ autenticado desde el req.user
        const userId = req.user?.id;

        //consulta en la bd para obtener detalles completos del usuario
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "Not found user" });
        }

        //return userInfo
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
    }
};

export { getUserInfo }