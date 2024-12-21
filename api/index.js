import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import usersRouter from "./routes/users.router.js";
import cookieParser from "cookie-parser"
import path from "path"

dotenv.config();

mongoose
  .connect(process.env.MONGODB_VITE_URL)
  .then(() => {
    console.log("Connected to MongoDB perfectly");
  })
  .catch((error) => {
    console.log(error);
  });

  const __dirname = path.resolve()

const PORT = process.env.PORT_URL;

const app = express();

app.use(express.json());
app.use(cookieParser())

app.listen(PORT, () => {
  console.log(`Server runnning on localhost ${PORT}!!!`);
});

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

app.use(express.static(path.join(__dirname, "client/dist")))



app.get((err, req, res) =>{
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})  


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message | "Internet Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
