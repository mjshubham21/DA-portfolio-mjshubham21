import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL || "fallback@example.com";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end();

    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',  // Gmail SMTP host
        port: 465, // SSL port
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: myEmail,
            subject: `Contact Form Message from ${name}`,
            text: message,
            html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
        });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error sending email' });
    }
}
