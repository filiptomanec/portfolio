import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";

// Server-side copy of the form rules: the request body comes straight from the client
const contactSchema = Yup.object({
  name: Yup.string().trim().max(100).required(),
  surname: Yup.string().trim().max(100).required(),
  email: Yup.string().trim().email().max(254).required(),
  phone: Yup.string().trim().max(30).default(""),
  message: Yup.string().trim().max(5000).required(),
}).required();

// Form values are inserted into the HTML body of the e-mail
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    let values: Yup.InferType<typeof contactSchema>;
    try {
      values = await contactSchema.validate(req.body, { strict: false });
    } catch {
      res.status(400).json({ error: "Neplatný obsah formuláře." });
      return;
    }
    const { name, surname, email, phone, message } = values;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-mail configuration: sent from the authenticated account, replies go to the visitor
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: "tomanec.f@gmail.com",
      subject: "Nová zpráva z kontaktního formuláře",
      html: `
                <h3>Nová zpráva od ${escapeHtml(name)} ${escapeHtml(surname)}</h3>
                <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
                <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
                <p><strong>Zpráva:</strong> ${escapeHtml(message)}</p>
            `,
    };

    // Send e-mail
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Zpráva byla odeslána!" });
    } catch (error) {
      console.error("Sending the contact e-mail failed:", error);
      res.status(500).json({ error: "Došlo k chybě při odesílání zprávy." });
    }
  } else {
    res.status(405).json({ error: "Metoda není povolena." });
  }
}
