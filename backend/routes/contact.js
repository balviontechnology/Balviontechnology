import dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";
import { Resend } from "resend";

dotenv.config();
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("API KEY?", process.env.RESEND_API_KEY);


const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }
});

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, message, company } = req.body;
    const resume = req.file;

    if (company) return res.json({ success: true }); // honeypot

    if (!resume)
      return res.status(400).json({ success: false, message: "Resume required" });

    if (resume.mimetype !== "application/pdf")
      return res.status(400).json({ success: false, message: "PDF only allowed" });

    // Send Email
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer.toString("base64"),
          path: undefined
        }
      ]
    });

    return res.json({ success: true });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;
