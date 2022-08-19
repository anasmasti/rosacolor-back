import { Router } from "express";
import fetchProductsByCategory from "../controller/products/fetchProductsByCategory";
const router = Router();
const addProduct = require('../controller/products/addProduct.ts')
const fetchProductBySlug = require('../controller/products/fetchProductBySlug.ts')

router.route("/product").post(addProduct);
router.route("/product-by-slug/:slug").get(fetchProductBySlug);
router.route("/product-by-category/:category").get(fetchProductsByCategory);

export default router;
