import mongoose from "mongoose";
import dotnev from "dotenv";
dotnev.config();

const mongo_url = process.env.MONGO_URL;

const dbConnection = async () => {
  try {
   await mongoose.connect(mongo_url);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.error(error)
  }
};
export default dbConnection
