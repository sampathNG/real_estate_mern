import express from "express";
import cors from "cors";
import BodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.listen(3000, () => console.log("Server is running on port 3000"));
