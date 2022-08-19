import { Request, Response } from "express";
import getProductByCategory from "../../services/product/getProductsByCategory";

const fetchProductsByCategory = async (req: Request, res: Response) => {
  try {
    await getProductByCategory(req.params.category)
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

export default fetchProductsByCategory;
