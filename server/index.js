import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import BodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const dbURL =
  "mongodb+srv://ramuksampath5:passwords@cluster0.u47vioy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
mongoose
  .connect(`${dbURL}`)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
const port = process.env.PORT;
app.listen(3000, () => console.log(`Server is running on port ${port}`));
