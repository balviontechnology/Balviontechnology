import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();
const app = express();

// Debug logs
app.use((req,res,next)=>{
  console.log(req.method, req.url, "FROM", req.headers.origin);
  next();
});

app.get("/", (req,res)=>{
  res.send("🚀 Balvion Backend Running");
});

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://balviontechnology.vercel.app",
    "https://www.balviontech.com"
  ],
  methods: ["GET","POST","OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Handle OPTIONS preflight
app.options("/api/contact", cors());

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
