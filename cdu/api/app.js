import express from "express";
import recordRoutes from "../api/routes/recordroutes.js";
import cors from "cors";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/", recordRoutes);

export default app;
