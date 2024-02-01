import { Schema, model } from "mongoose";
import { Ropa } from "../interfaces/ropa.interface";
import { Double } from "mongodb";


const ItemSchema = new Schema<Ropa>(
  {
    image:{
     type: String,
     required: true,
    },
    seccion: {
      type: String,
      enum: ["Hombre", "Mujer"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    color: {
      type: [String],
      required: true,
    },
    size: {
      type: Object,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
