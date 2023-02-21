import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
import userRouter from "./routes/user.route.js";
import propertyRouter from "./routes/property.route.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

//middleware

app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

const starServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server started on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

starServer();
