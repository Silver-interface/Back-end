import { Document } from "mongodb";

export interface Auth extends Document{
  email: string;
  password: string;
}
