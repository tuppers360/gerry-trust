const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY_TEST);
  console.log('SENDGRID', process.env.SENDGRID_API_KEY_TEST);
  const { name, email, message } = req.body;
  console.log('BODY:', req.body);
  const content = {
    to: process.env.SENDGRID_CONTACTUS_EMAIL,
    from: email,
    subject: `New Message From - ${name} - ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
