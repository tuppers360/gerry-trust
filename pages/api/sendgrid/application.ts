const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('SENDGRID', process.env.SENDGRID_API_KEY);
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    addressLine1,
    addressLine2,
    town,
    county,
    postCode,
    application,
  } = req.body;
  console.log('BODY:', req.body);
  const content = {
    to: process.env.SENDGRID_APPLICATION_EMAIL,
    from: email,
    subject: `New Application From - : ${firstName} ${lastName}: ${email}`,
    text: firstName,
    lastName,
    dateOfBirth,
    addressLine1,
    addressLine2,
    town,
    county,
    postCode,
    application,
    html: `
    <p>${firstName}</p><p>${lastName}</p><p>${dateOfBirth}</p>
    <p>${addressLine1}</p><p>${addressLine2}</p><p>${town}</p><p>${county}</p><p>${postCode}</p><p>${application}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Your application was sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
