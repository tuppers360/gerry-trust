import { NextApiRequest, NextApiResponse } from 'next';

import Stripe from 'stripe';
import { buffer } from 'micro';
import prisma from './../../../lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27'
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    let event;
    try {
      // 1. Retrieve the event by verifying the signature using the raw body and secret
      const rawBody = await buffer(req);
      const signature = req.headers['stripe-signature'];

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
    console.log('✅ Success:', event.id);

    const { metadata } = event.data.object;
    const checkout_session = event.data.object.id;
    // 2. Handle event type (add business logic here)
    switch (event.type) {
      case 'checkout.session.completed':
        console.log(`💰  Payment received!`);
        console.log('WEBHOOK BODY', checkout_session);
        await prisma.donation.update({
          where: {
            checkout_session
          },
          data: {
            confirmed: true
          }
        });
        break;
      case 'customer.created':
        const customer = event.data.object;
        // Then define and call a function to handle the event customer.created
        break;
      default:
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // 3. Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
