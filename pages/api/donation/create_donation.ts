import { NextApiRequest, NextApiResponse } from 'next';

import { Donator } from '@prisma/client';
import { prisma } from 'lib/prisma';

type ResponseData = {
  message: string;
  data?: Donator;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === 'POST') {
    try {
      const {
        amount,
        giftAid,
        firstName,
        lastName,
        email,
        addressLine1,
        addressLine2,
        town,
        county,
        postCode,
        stripeSessionId
      } = req.body.data;

      const result = await prisma.donator.upsert({
        where: { email },
        update: {
          donation: {
            create: {
              amount,
              giftAid,
              checkoutSession: stripeSessionId
            }
          }
        },
        create: {
          firstName,
          lastName,
          email,
          addressLine1,
          addressLine2,
          town,
          county,
          postCode,
          donation: {
            create: { amount, giftAid, checkoutSession: stripeSessionId }
          }
        }
      });

      return res
        .status(200)
        .json({ message: 'Donation created', data: result });
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
