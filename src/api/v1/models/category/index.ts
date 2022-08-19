import { model, Schema } from "mongoose";
import ICategory from "../../interfaces/Category";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Category = model<ICategory>("Category", CategorySchema);

export default Category;
