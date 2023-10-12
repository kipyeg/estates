import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();
const app = express();
app.listen(3001, () => {
  console.log("SERVER STARTED");
});
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/user", userRouter);
