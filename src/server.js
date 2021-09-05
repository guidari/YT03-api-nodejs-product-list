import express from "express";
import { productRoute } from "./product.routes.js";

const app = express();

app.use(express.json());

app.use("/products", productRoute);

app.listen(3333, () => console.log("Server is running on port 3333"));
