import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); // 11111
    const isUser = verifyToken(`${jwt}`) as { id: string };
    console.log("isUser", isUser);
    console.log("jwt", jwt);
    if (!isUser) {
      console.log("if !isUser", isUser);
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      console.log("else", !isUser,);

      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("SESSION_NO_VALIDAD");
  }
};

export { checkJwt };
