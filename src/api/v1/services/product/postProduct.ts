import { Document } from "mongoose";
import IProduct from "../../interfaces/Product";
import postDocument from "../../utils/services/postDocument";

const postProduct = async (Product: Document<unknown, any, IProduct>) => {
  return postDocument(Product);
};

export default postProduct;
