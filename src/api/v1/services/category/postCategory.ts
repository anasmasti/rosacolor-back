import { Document } from "mongoose";
import ICategory from "../../interfaces/Category";
import postDocument from "../../utils/services/postDocument";

const postCategory = async (Category: Document<unknown, any, ICategory>) => {
  return postDocument(Category);
};

export default postCategory;
