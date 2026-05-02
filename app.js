import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
import generateRoutes from "./route/generateRoutes.js";
import userRoutes from "./route/userRoutes.js";

import connectDB from "./config/database.js";
import submitRoutes from "./route/submitRoutes.js";
import testRoutes from "./route/testRoutes.js";
connectDB()

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello World!");
}
);

app.use("/api", generateRoutes, submitRoutes, testRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log("server running")
})