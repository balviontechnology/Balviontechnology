import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://balviontechnology.vercel.app"
  ],

}));

app.use("/api/contact", contactRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
