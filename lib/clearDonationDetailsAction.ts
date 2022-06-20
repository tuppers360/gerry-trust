import { GlobalState } from 'little-state-machine';

export default function clearDonationDetailsAction(
  state: GlobalState,
  payload: {
    firstName?: string;
    lastName?: string;
    email?: string;
    addressLine1?: string;
    addressLine2?: string;
    town?: string;
    county?: string;
    postCode?: string;
    amount?: number;
    giftAid?: boolean;
  }
): GlobalState {
  return {
    ...state,
    donationDetails: {}
  };
}
