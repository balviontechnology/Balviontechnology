import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";

const router = express.Router();

/* Multer config */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* POST contact */
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const resume = req.file;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
    console.log("Resume:", resume?.filename);

    // Mail setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Balvion New Opportunity Form Submission",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
      attachments: resume
        ? [
            {
              filename: resume.originalname,
              path: resume.path,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
