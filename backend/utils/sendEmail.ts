const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

type Props = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
};

const sendEmail = async (mailObject: Props) => {
  console.log(colors.red("sendEmail initiated"));
  const { from, to, subject, text, html } = mailObject;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
  };

  transporter.use(
    "compile",
    hbs({
      viewEngine: "express-handlebars",
      viewPath: "./views",
    })
  );

  await transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error(error);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
