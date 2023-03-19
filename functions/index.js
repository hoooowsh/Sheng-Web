const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXKQF1amLNEe6nCPn_o3xcX9d9dL-H9II",
  authDomain: "sheng-web.firebaseapp.com",
  databaseURL: "https://sheng-web-default-rtdb.firebaseio.com",
  projectId: "sheng-web",
  storageBucket: "sheng-web.appspot.com",
  messagingSenderId: "625914970142",
  appId: "1:625914970142:web:36061a5e162c78bddc6e0f",
  measurementId: "G-R0YP69XL39",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post("/SendMessage", async (req, res) => {
  console.log(req);
  const email = req.body.email;
  const name = req.body.name;
  const phone = req.body.phone;
  const message = req.body.message;
  console.log(email);
  console.log(name);
  console.log(phone);
  console.log(message);

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "haoshengpersonalweb@gmail.com", // replace with your Gmail email
        pass: "npdklfivdzuunxmp", // replace with your Gmail password
      },
    });

    let info = await transporter.sendMail({
      from: "My Web <haoshengpersonalweb@gmail.com>", // replace with your name and Gmail email
      to: "haosheng950403@gmail.com", // replace with the recipient's email
      subject: "My Web Message",
      html: `<p>Sender Name: ${name}.</p> <br></br> <p>Sender Phone: ${phone}.</p> <br></br> <p>Sender Email: ${email}.</p> <br></br> <p>Sender Message: ${message}</p>`,
    });
    console.log("success");
    res.status(200).send("success");
  } catch (err) {
    console.log(err);
    res.status(400).send("err");
  }
});

app.get("/test", async (req, res) => {
  res.status(200).send("testsete");
});
exports.app = functions.https.onRequest(app);
