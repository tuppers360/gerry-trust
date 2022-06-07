import { NextApiRequest, NextApiResponse } from 'next';

import Cors from 'micro-cors';
import Stripe from 'stripe';
import { buffer } from 'micro';
import { prisma } from 'lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27'
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

export const config = {
  api: {
    bodyParser: false
  }
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD']
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    let event: Stripe.Event;

    // 1. Retrieve the event by verifying the signature using the raw body and secret
    const rawBody = await buffer(req);
    const signature = req.headers['stripe-signature']!;

    try {
      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
    console.log('✅ Success:', event.id);

    // 2. Handle event type (add business logic here)
    switch (event.type) {
      case 'checkout.session.completed':
        console.log(`💰 Payment received!`);
        const session = event.data.object as Stripe.Checkout.Session;

        console.log('✅ Session:', session);
        await prisma.donation.updateMany({
          where: {
            checkoutSession: session.id
          },
          data: {
            confirmed: true
          }
        });

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
};

export default cors(webhookHandler as any);
