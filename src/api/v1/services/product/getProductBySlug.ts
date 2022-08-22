import { Model } from "mongoose";
import IProduct from "../../interfaces/Product";

const getProductBySlug = async (
  slug: string,
  Product: Model<IProduct, {}, {}, {}, any>
) => {
  return await Product.findOne({ slug: slug }).populate("category", "name");
};

export default getProductBySlug;
