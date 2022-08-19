import { Router } from "express";
const addCategory = require("../controller/category/addCategory");

const router = Router();

router.route("/category").post(addCategory);

export default router;
