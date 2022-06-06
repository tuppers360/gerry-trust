import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('End Point Hit - First Step', req.body.data);
  if (req.method === 'POST') {
    console.log('End Point Hit - its a POST');
    try {
      console.log('End Point Hit - creating donation');
      console.log('Donation Body', req.body);

      const { amount, giftAid } = req.body.data;
      console.log('Amount', amount);
      console.log('Gift Aid', giftAid);
      const stripeSessionId: string = req.body.stripeSessionId;
      console.log('stripeSessionId:', stripeSessionId);

      const newdonation = await prisma.donation.create({
        data: {
          amount,
          giftAid,
          checkoutSession: stripeSessionId
        }
      });
      console.log('Donation created', newdonation);
      return res.status(200).json(newdonation);
    } catch (error) {
      console.log('Error creating donation', error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
};
