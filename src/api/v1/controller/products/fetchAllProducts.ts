import Product from "../../models/product/index";
import { Request, Response } from "express";
import getAllProducts from "../../services/product/getAllProducts";

const fetchAllProducts = async (req: Request, res: Response) => {
  try {
    await getAllProducts(Product)
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

module.exports = fetchAllProducts;
