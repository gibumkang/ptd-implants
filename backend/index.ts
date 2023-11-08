import express from "express";
import path from "path";
const app = express();
const cors = require("cors");
import dotenv from "dotenv";
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");
dotenv.config();

const PORT = process.env.SERVER_PORT;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("index");
});

app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;
  const mailObject = {
    from: `${process.env.CLIENT_NAME} <${process.env.CLIENT_NO_REPLY}>`,
    to: process.env.CLIENT_EMAIL, // Replace with 'email' that is extracted from req.body
    subject: `You have a new submission from ${process.env.CLIENT_NAME} 🎉`,
    text: message,
    name,
    html: `
    <p>You have a new lead from your website (https://implant-dentistry-frontend.vercel.app/):</p>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    `,
  };

  try {
    await sendEmail(mailObject);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
