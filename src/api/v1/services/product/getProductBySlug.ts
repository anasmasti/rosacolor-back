import { Model } from "mongoose";
import IProduct from "../../interfaces/Product";

const getProductBySlug = async (
  slug: string,
  Product: Model<IProduct, {}, {}, {}, any>
) => {
  return await Product.find({ slug: slug }).populate("categoey", "name");
};

export default getProductBySlug;
