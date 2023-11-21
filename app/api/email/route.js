import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: process.env.MAIL_SENDER,
      pass: process.env.MAIL_PASS,
   },
});

export async function POST(req, res) {
   const { email, subject, message } = await req.json();
   console.log(email, subject, message);

   const mailOptions = {
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_SENDER,
      subject: subject,
      html: `<h1>From: ${email}</h1> <p>${message}</p>`,
   };

   try {
      await transporter.sendMail(mailOptions);

      return NextResponse.json({ success: true });
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to send email" });
   }
}
