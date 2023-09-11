const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Replace these values with your Mailgun API credentials
const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send an email using the Mailgun API
    const response = await axios.post(
      `https://api.mailgun.net/v3/${DOMAIN}/messages`,
      {
        from: "your@email.com",
        to: email,
        subject: "Your Subject Here",
        text: `Hello ${name},\n\n${message}`,
      },
      {
        auth: {
          username: "api",
          password: API_KEY,
        },
      },
    );

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while sending the email.",
      });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
