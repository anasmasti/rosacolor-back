import { Schema, model } from "mongoose";
import IProduct from "../../interfaces/Product";

const ProductSchema = new Schema({
  title: String,
  description: String,
  slug: String,
});

const Product = model<IProduct>("Product", ProductSchema);

export default Product;
