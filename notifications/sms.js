const twilio = require('twilio');

const sendSMS = (to, message) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = new twilio(accountSid, authToken);

  client.messages.create({
    body: message,
    to,
    from: process.env.TWILIO_PHONE_NUMBER,
  })
  .then((message) => console.log(`SMS sent with SID: ${message.sid}`))
  .catch((error) => console.error('Error sending SMS:', error));
};

module.exports = { sendSMS };
