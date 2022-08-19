import dotenv from "dotenv";
import http from "http";
import express from "express";
import mongoDbConnection from "./src/config/db/mongodb.config";
import productRoute from "./src/api/v1/router/product.routes";
import homeRoute from "./src/api/v1/router/home.routes";
import categoryRoute from "./src/api/v1/router/category.routes";
import handleRoutes from "./src/api/v1/utils/handleRoutes";

// Server config
const app = express();
const server = http.createServer(app);

// .env config
dotenv.config();

// Get port from .env
const port = process.env.PORT;

// Body parse setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoDbConnection;

// Routes configuration
handleRoutes(app, productRoute, homeRoute, categoryRoute);

server.listen(port, () => {
  console.log(`Server runnig at : http://localhost:${port}`);
});
