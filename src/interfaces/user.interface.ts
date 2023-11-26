import { Auth } from "./auth.interface";

export interface User extends Auth {
  name: string;
  lastName: string;
  IdType: string;
  IdNumber: string;
  Rol: number;
}
