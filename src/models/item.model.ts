import { Schema, model } from "mongoose";
import { Ropa } from "../interfaces/ropa.interface";

const ItemSchema = new Schema<Ropa>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Camisa", "Camiseta"],
      required: true,
    },
    talla: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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
