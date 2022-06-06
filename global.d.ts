import 'little-state-machine';

declare module 'little-state-machine' {
  interface GlobalState {
    donationDetails: {
      firstName: string;
      lastName: string;
      email: string;
      addressLine1: string;
      addressLine2: string;
      town: string;
      county: string;
      postCode: string;
      amount: number;
      giftAid: boolean;
    };
  }
}
