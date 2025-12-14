import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: "POST",
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/contact", contactRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
