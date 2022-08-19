import { Document } from "mongoose";

const postDocument = async (Document: Document) => {
  return await Document.save();
};

export default postDocument;
