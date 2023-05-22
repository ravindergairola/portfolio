const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000; // Update with your desired port number

app.use(express.json());

app.post("/api/send-email", (req, res) => {
  const { fullName, email, mobileNumber, subject, message } = req.body;

  // Create a transporter using your email service details
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Update with your email service (e.g., Gmail, Outlook, etc.)
    auth: {
      user: "ravigairola248@gmail.com", // Update with your email address
      pass: "Ravi@1ivar", // Update with your email password
    },
  });

  // Compose the email message
  const mailOptions = {
    from: email,
    to: "ravigairola248@gmail.com", // Update with your email address to receive the message
    subject: subject,
    text: `Name: ${fullName}\nEmail: ${email}\nMobile Number: ${mobileNumber}\n\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred while sending the email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
