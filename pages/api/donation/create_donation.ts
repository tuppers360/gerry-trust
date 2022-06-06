import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      console.log('End Point Hit - creating donation');
      console.log('Donation Body', req.body);

      const { amount, giftAid } = req.body.data;
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
