import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  await mongoose
    .connect(process.env.DBconnectionString)
    .then(() => console.log("DB connected"));
};
