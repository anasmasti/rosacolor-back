import Product from "../../models/product/index";
import postProduct from '../../services/product/postProduct';
import { Request, Response } from 'express';
import IProduct from '../../interfaces/Product';
import { Document } from "mongoose";

const addProduct = (req: Request, res: Response) => {
  try {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
      img: req.body.img,
      categories: req.body.categories
    });

    postProduct(product)
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
