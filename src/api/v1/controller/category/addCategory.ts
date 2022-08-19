import Category from "../../models/category";
import postCategory from "../../services/category/postCategory";
import { Request, Response } from "express";
import ICategory from "../../interfaces/Category";
import { Document } from "mongoose";

const addCategory = async (req: Request, res: Response) => {
  try {
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
    });

    await postCategory(category)
      .then((data: Document<unknown, any, ICategory>) => {
        res.json(data);
      })
      .catch((error: Error) => {
        res.status(402).send({ message: error.message });
      });
  } catch (error: any) {
    res.status(402).send({ message: error.message });
  }
};

module.exports = addCategory;
