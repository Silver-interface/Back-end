import { Ropa } from "../interfaces/ropa.interface";
import ItemModel from "../models/item.model";

const insertRopa = async (item: Ropa) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getRopas = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getRopa = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateRopa = async (id: string, data: Ropa) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteRopa = async (id: string) => {
  const responseItem = await ItemModel.findOneAndDelete({ _id: id });
  return responseItem;
};

export { insertRopa, getRopas, getRopa, updateRopa, deleteRopa };
