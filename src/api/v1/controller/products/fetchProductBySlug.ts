import Product from "../../models/product/index";
import getProductBySlug from "../../services/product/getProductBySlug";
import { Request, Response } from "express";

const feshProductBySlug = (req: Request, res: Response) => {
  try {
    getProductBySlug(req.params.slug, Product)
      .then((data) => {
        res.json(data);
      })
      .catch((error: Error) => {
        res.status(402).send({ message: error.message });
      });
  } catch (error: any) {
    res.status(402).send({ message: error.message });
  }
};

module.exports = feshProductBySlug;
