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
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
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

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
};

module.exports = sendEmail;
