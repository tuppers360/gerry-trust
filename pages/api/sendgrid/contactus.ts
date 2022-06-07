import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { firstName, lastName, email, message } = req.body;
  const content = {
    to: process.env.SENDGRID_CONTACTUS_EMAIL,
    from: email,
    subject: `New Message From - ${firstName} ${lastName} - ${email}`,
    text: message,
    html: `<p>${message}</p>`
  };

  const msgClient = {
    from: 'noreply@gerryrichardsontrust.org', // sender address
    to: email, // list of receivers
    subject: 'Gerry Richardson Trust Contact Form', // Subject line
    text: `Hi ${firstName}\r\n
    Thanks for being awesome!\r\n
    We have received your message and would like to thank you for contacting us.\r\n
    If your inquiry is urgent, please use the telephone number listed below. Otherwise, we will reply by email as soon as possible.\r\n
    Talk to you soon, Gerry Richardson Trustees\r\n
    Northdene,\r\n
    Stoney Lane,\r\n
    Hambleton,\r\n
    Poulton-Le-Fylde,\r\n
    FY6 9AF\r\n
    Tel: 01253 700879\r\n
    Email: contactus@gerryrichardsontrust.org`, // plain text body
    html: `<p>Hi ${firstName}</p>
    <strong>Thanks for being awesome!</strong>
    <p>We have received your message and would like to thank you for contacting us.</p>
    <p>If your inquiry is urgent, please use the telephone number listed below. Otherwise, we will reply by email as soon as possible.</p>
    <p>Talk to you soon,</p>
    <p>Gerry Richardson Trustees</p>
    <address>
    Northdene,<br>
    Stoney Lane,<br>
    Hambleton,<br>
    Poulton-Le-Fylde,<br>
    FY6 9AF
    </address>
    <p><strong>Tel:</strong> 01253 700879</p>
    <p><strong>Email:</strong> contactus@gerryrichardsontrust.org</p>` // html body
  };

  try {
    await sgMail.send(content);
    await sgMail.send(msgClient);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    res.status(400).send('Message not sent.');
  }
}
