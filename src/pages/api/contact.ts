import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, surname, email, phone, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-mail configuration
    const mailOptions = {
      from: email,
      to: "tomanec.f@gmail.com",
      subject: "Nová zpráva z kontaktního formuláře",
      html: `
                <h3>Nová zpráva od ${name} ${surname}</h3>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Zpráva:</strong> ${message}</p>
            `,
    };

    // Send e-mail
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Zpráva byla odeslána!" });
    } catch (error) {
      res.status(500).json({ error: "Došlo k chybě při odesílání zprávy." });
    }
  } else {
    res.status(405).json({ error: "Metoda není povolena." });
  }
}
