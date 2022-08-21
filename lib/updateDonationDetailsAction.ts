import { GlobalState } from 'little-state-machine';

export default function updateDonationDetailsAction(
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
    message?: string;
  }
): GlobalState {
  return {
    ...state,
    donationDetails: {
      ...state.donationDetails,
      ...payload
    }
  };
}
