import { Router } from "express";
const router = Router();
const homeController = require("../controller/home/index.ts");

router.route("/").get(homeController);

export default router;
