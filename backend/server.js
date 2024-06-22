const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, mobile, email, course } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Enquiry Form Submission`,
    text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nCourse Interested In: ${course}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
