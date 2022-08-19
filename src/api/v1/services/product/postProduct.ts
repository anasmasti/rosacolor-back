import { Document } from "mongoose";
import IProduct from "../../interfaces/Product";

const postProduct = async (Product: Document<unknown, any, IProduct>) => {
  return await Product.save();
};

export default postProduct;
