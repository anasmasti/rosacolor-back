import Product from "../../models/product/index";
import postProduct from '../../services/product/postProduct';
import { Request, Response } from 'express';
import IProduct from '../../interfaces/Product';
import { Document } from "mongoose";
import getCategoryById from "../../services/category/getCategoryById";

const addProduct = async (req: Request, res: Response) => {
  try {
    const category = await getCategoryById(req.body.category);

    if (!category) {
      res.status(404).send({ message: "Category not found !" });
    }

    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
      img: req.body.img,
      category: req.body.category
    });

    await postProduct(product)
      .then((data: Document<unknown, any, IProduct>) => {
        res.json(data);
      })
      .catch((error: Error) => {
        res.status(402).send({ message: error.message });
      });
  } catch (error: any) {
    res.status(402).send({ message: error.message });
  }
};

module.exports = addProduct;
