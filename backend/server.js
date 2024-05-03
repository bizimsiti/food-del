import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

// app config
const app = express();
const port = process.env.PORT;

//middleware

app.use(express.json());
app.use(cors());

// db connect
connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
