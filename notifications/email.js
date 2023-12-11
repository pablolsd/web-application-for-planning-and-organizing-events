const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
});

const sendEmail = (to, subject, body) => {
  const mailOptions = {
    from: 'your-email@example.com',
    to,
    subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendEmail };
