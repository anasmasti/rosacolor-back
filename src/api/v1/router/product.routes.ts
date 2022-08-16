import { Router } from "express";
const router = Router();
const addProduct = require('../controller/products/addProduct.ts')
const fetchProductBySlug = require('../controller/products/fetchProductBySlug.ts')

router.route("/product").post(addProduct);
router.route("/product-by-slug/:slug").get(fetchProductBySlug);

export default router;
