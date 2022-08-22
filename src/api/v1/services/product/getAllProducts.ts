import { Model } from "mongoose";
import IProduct from "../../interfaces/Product";

const getAllProducts = async (
  Product: Model<IProduct, {}, {}, {}, any>
) => {
  return await Product.find().populate("category", "name");
};

export default getAllProducts;
