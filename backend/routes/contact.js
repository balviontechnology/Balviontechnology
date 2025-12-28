import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";

const router = express.Router();

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const resume = req.file;

    // SECURITY VALIDATION
    if (!resume)
      return res.status(400).json({ success: false, message: "Resume required" });

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    // honeypot trigger
    if (req.body.company) {
  return res.status(200).json({ success: true });
}


    if (resume.mimetype !== "application/pdf")
      return res.status(400).json({ success: false, message: "PDF only allowed" });

    if (resume.size > 5 * 1024 * 1024)
      return res.status(400).json({ success: false, message: "File too large" });

    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false,
    socketTimeout: 20000
  }
});


    try {
  await transporter.sendMail({
    from: `"Balvion Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form",
    html: `
      <b>Name:</b> ${name}<br/>
      <b>Email:</b> ${email}<br/>
      <b>Phone:</b> ${phone}<br/>
      <b>Message:</b> ${message}
    `,
    attachments: resume ? [
      {
        filename: resume.originalname,
        content: resume.buffer,
      }
    ] : []
  });

  return res.json({ success: true });

} catch (err) {
  console.error("MAIL SEND FAILED:", err);

  // Still return success so user doesn’t get stuck
  return res.json({
    success: true,
    warning: "Mail failed but request received"
  });
}

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;
