import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import BodyParser from "body-parser";
import mongoose from "mongoose";
// import path from "path";
const dbURL =
  "mongodb+srv://ramuksampath5:passwords@cluster0.u47vioy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
mongoose
  .connect(`${dbURL}`)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));
const port = process.env.PORT;
app.listen(3000, () => console.log(`Server is running on port ${port}`));
