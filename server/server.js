import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, '../client/dist');

// Always load the server's .env file, even when Node is started from the project root.
dotenv.config({ path: path.join(__dirname, '.env') });
const PORT = process.env.PORT || 5000;

const requiredMailVariables = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'MAIL_FROM', 'MAIL_TO'];
const missingMailVariables = requiredMailVariables.filter((name) => !process.env[name]);
const smtpPort = Number(process.env.SMTP_PORT || 587);
const mailer = missingMailVariables.length === 0
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === 'true' || smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[character]));
}

app.disable('x-powered-by');
app.use(cors());
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'portfolio-api' });
});

app.post('/api/contact', async (request, response) => {
  const { name, email, message } = request.body ?? {};

  if (![name, email, message].every((value) => typeof value === 'string' && value.trim())) {
    return response.status(400).json({ message: 'Please complete every field.' });
  }

  if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
    return response.status(400).json({ message: 'Please enter a valid email address.' });
  }

  if (!mailer) {
    console.error(`Email is not configured. Missing: ${missingMailVariables.join(', ')}`);
    return response.status(503).json({ message: 'Email service is not configured yet. Please try again later.' });
  }

  const senderName = name.trim();
  const senderEmail = email.trim();
  const senderMessage = message.trim();

  try {
    await mailer.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: { name: senderName, address: senderEmail },
      subject: `Portfolio enquiry from ${senderName}`,
      text: `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}`,
      html: `
        <h2>New portfolio enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(senderName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(senderEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(senderMessage).replace(/\r?\n/g, '<br>')}</p>
      `,
    });
  } catch (error) {
    console.error('Unable to send portfolio email:', error);
    return response.status(502).json({ message: 'Unable to send your message right now. Please try again later.' });
  }

  return response.status(201).json({
    message: 'Thanks! Your message has been sent.',
  });
});

app.use(express.static(clientDist));

app.use((request, response, next) => {
  if (request.method === 'GET' && request.accepts('html')) {
    return response.sendFile(path.join(clientDist, 'index.html'));
  }
  return next();
});

app.use((_request, response) => {
  response.status(404).json({ message: 'Route not found.' });
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});
