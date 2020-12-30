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
  const msgClient = {
    from: 'noreply@gerryrichardsontrust.org', // sender address
    to: email, // list of receivers
    subject: `Application from ${firstName} ${lastName}`, // Subject line
    text: `Hi ${firstName}\r\n
      Thank you for your application!\r\n
      We have received your application and will consider it at our next meeting.\r\n
      We will contact you by email to let you know if you are successful or not.\r\n
      PLEASE BE AWARE as per the terms when applying - If further information becomes available to you regards to your application but prior to the Trustees’ quarterly meeting, eg receiving the result of an outstanding funding application or needing to change details on this application, you will need to contact us to let us know about this change.\r\n
      If we need any futher information we will contact you by email\r\n
      GOOD LUCK!\r\n
      Regards\r\n
      Gerry Richardson Trustees\r\n
      Northdene,\r\n
      Stoney Lane,\r\n
      Hambleton,\r\n
      Poulton-Le-Fylde,\r\n
      FY6 9AF\r\n
      Tel: 01253 590510\r\n
      Email: contactus@gerryrichardsontrust.org`, // plain text body
    html: `<p>Hi ${firstName}</p>
      <strong>Thank you for your application!</strong>
      <p>We have received your application and will consider it at our next meeting.</p>
      <p>We will contact you by email to let you know if you are successful or not.</p>
      <p><strong>PLEASE BE AWARE</strong> as per the terms when applying - If further information becomes available to you regards to your application but prior to the Trustees’ quarterly meeting, eg receiving the result of an outstanding funding application or needing to change details on this application, you will need to contact us to let us know about this change.</p>
      <p>If we need any futher information we will contact you by email</p>
      <p><strong>GOOD LUCK!</strong></p>
      <p>regards</p>
      <p>Gerry Richardson Trustees</p>
      <address>
      Northdene,<br>
      Stoney Lane,<br>
      Hambleton,<br>
      Poulton-Le-Fylde,<br>
      FY6 9AF
      </address>
      <p><strong>Tel:</strong> 01253 590510</p>
      <p><strong>Email:</strong> contactus@gerryrichardsontrust.org</p>`, // html body
  };

  try {
    await sgMail.send(content);
    await sgMail.send(msgClient);
    res.status(200).send('Your grant application was sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
