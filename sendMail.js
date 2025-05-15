const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json()); // Parse JSON body

app.post('/submit-form', async (req, res) => {
  const { name, email, phone } = req.body;

  // Configure nodemailer (replace with your Gmail credentials or App Password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Opuine.jaja@gmail.com',
      pass: 'Loveordained2025'
    }
  });

  const mailOptions = {
    from: email,
    to: 'Opuine.jaja@gmail.com',
    subject: '',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent!');
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).send('Error sending email.');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});