import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/university-management");

    app.listen(config.port, () => {
      console.log(`server is running on ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
