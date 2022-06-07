import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { amount, giftAid } = req.body.data;
      const stripeSessionId: string = req.body.stripeSessionId;

      const newdonation = await prisma.donation.create({
        data: {
          amount,
          giftAid,
          checkoutSession: stripeSessionId
        }
      });

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
