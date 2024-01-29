import { Auth } from "./auth.interface";
import { Document } from "mongodb";

export interface User extends Document,Auth {
  _id: string;
  name: string;
  lastName: string;
  IdType: string;
  IdNumber: string;
  email: string;
  password: string;
  Rol: number;
}
