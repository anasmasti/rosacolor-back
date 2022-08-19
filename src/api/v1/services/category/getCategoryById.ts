import { Model } from "mongoose";
import Category from "../../models/category";

const getCategoryById = async (id: any) => {
  return await Category.findOne({ _id: id });
};

export default getCategoryById;
