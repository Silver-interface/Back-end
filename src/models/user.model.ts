import { Schema, Types, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
   
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    IdType: {
      type: String,
      required: true,
    },
    IdNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    Rol: {
      type: Number,
      default: 1,
    },
  }, 
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model<User>("users", UserSchema);
export default UserModel;
