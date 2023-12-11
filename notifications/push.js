const webPush = require('web-push');

webPush.setVapidDetails(
  'mailto:your-email@example.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

const sendPushNotification = (subscription, message) => {
  webPush.sendNotification(subscription, message).catch((err) => {
    console.error('Error sending push notification:', err);
  });
};

module.exports = { sendPushNotification };
