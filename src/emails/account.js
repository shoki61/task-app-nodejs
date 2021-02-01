const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = require('../env');

sgMail.setApiKey(sendgridAPIKey);

const msg = {
    to: 'orazmuradik@gmail.com', // Change to your recipient
    from: 'sohrat6128@hotmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })