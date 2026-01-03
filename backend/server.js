import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
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
    "https://balviontech.com",
    "https://www.balviontech.com",
    "https://balviontechnology.vercel.app",
    "http://localhost:3000"
  ],
  methods: "POST",
  allowedHeaders: ["Content-Type"]
}));

// 🚨 Apply rate limit ONLY to API routes
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10,                     // limit 10 requests / IP
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  }
});


// Handle OPTIONS preflight
app.options("/api/contact", cors());

app.use("/api/contact",contactLimiter, contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
