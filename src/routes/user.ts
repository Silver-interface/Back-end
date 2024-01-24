import {Router} from "express";
import { getUserInfo } from "../controllers/user.controller";
import { checkJwt } from "../middleware/session";

const userRouter = Router();

userRouter.get ("/user", checkJwt, getUserInfo);

export {userRouter};