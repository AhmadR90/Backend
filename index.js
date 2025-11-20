import createError from "http-errors";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dbConnection from "./Config/db-connection.js"
dotenv.config();
import userRoutes from "./routes/userRoutes.js"

const app = express();

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT || 5000;



// Catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use("/",(req,res)=>{
  res.send("API is running....")
})

dbConnection()
// Start Server
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

export default app;
