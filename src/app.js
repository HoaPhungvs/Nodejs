
import express from "express";
import dotenv from "dotenv";

import mongoose from "mongoose";
import router from "./router/products";
import cors from "cors"

dotenv.config();
const { PORT ,DB_URL } = process.env;
const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect(`${DB_URL}`)
  .then(() => console.log('Connected!'));

app.use("/api",router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
