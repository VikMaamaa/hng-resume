/*eslint-disable*/
const path = require('path')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const helmet = require('helmet');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport')
const Visitor = require("./models/Visitor")


const app = express();
app.use(express.json());

app.use(cors());



app.use("/", express.static(path.join(__dirname, "public/")))



// var router = express.Router()
//setup nodemailer
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
}));


// app.use('/', viewRouter)
//get route to send mail, from form
app.post("/send-mail", async(req, res) => {

    try {
        const newVisitor = new Visitor({
                username: req.body.name,
                email: req.body.email,
                message: req.body.message
            })
            //save user and respond
        const user = await newVisitor.save()

    } catch (err) {
        res.status(500).json("failed")
    }
    var to = req.body.email,
        subject = "MAAMAA VICTOR RESUME VISITOR",
        message = "I have received your message";
    // email = req.body.email;
    // name = req.body.name;
    //options
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: to,
        subject: subject,
        html: message
    };

    //delivery
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.status(200).json("success")
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json("success")
        }
    });


});


module.exports = app;