import nodemailer from "nodemailer";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false, // required for multer
  },
};

// Helper method to wrap multer so it can be used with async/await
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await runMiddleware(req, res, upload.single("cv"));
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }

  const { name, email, contact, field } = req.body;
  const cvFile = req.file;

  if (!cvFile) {
    return res.status(400).json({ success: false, error: "CV not uploaded" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      replyTo: email,
      to: process.env.MY_EMAIL,
      subject: `Job Application - ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p><b>Field of Interest:</b> ${field}</p>
      `,
      attachments: [
        {
          filename: cvFile.originalname,
          content: cvFile.buffer,
        },
      ],
    });

    res.status(200).json({ success: true });
  } catch (err) {
    // console.error("Career email error:", err);
    res.status(500).json({ success: false });
  }
}
