import { Schema, model } from "mongoose";
import IProduct from "../../interfaces/Product";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      unique: true,
      require: true,
    },
    img: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Product = model<IProduct>("Product", ProductSchema);

export default Product;
