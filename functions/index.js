const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: config.user.email, pass: config.user.password },
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, phone, message } = request.query;

    const mailOptions = {
      from: "CodingDave Website Messsage <codingdave.dev.nodemailer@gmail.com>",
      to: "codingdave.dev@gmail.com",
      subject: "Message Received From Website!",
      html: `<p style="font-size: 16px">From: ${name}</p><p style="font-size: 16px">Email: ${email}</p><p style="font-size: 16px">Phone Number: ${phone}</p><p style="font-size: 16px">Message: ${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message Sent Succesfully");
      }
    });


    const replyMailOptions = {
      from: "CodingDave <codingdave.dev.nodemailer@gmail.com>",
      to: email,
      subject: "We have received your message",
      html: `<p style="font-size: 16px">Thank you for your message, we will be in contact with you soon</p>`,
    };

    transporter.sendMail(replyMailOptions);


  });
});

// https://us-central1-codingdave-cd664.cloudfunctions.net/sendMail
