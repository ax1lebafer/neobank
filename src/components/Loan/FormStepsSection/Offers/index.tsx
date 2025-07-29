import styles from './styles.module.scss';
import { LoanOfferCard } from '@components/Loan/LoanOfferCard';
import { FC, useEffect, useState } from 'react';
import { IOffersProps } from '@components/Loan/FormStepsSection/Offers/types';
import { IS_OFFER_ACCEPTED, STEP } from '@/constants/localStorageKeys';
import { OfferAccepted } from '@components/Loan/OfferAccepted';
import { useAppDispatch } from '@/store/store';
import { applyOfferAsync } from '@/store/actions/Loan';
import { IPrescoringResponseDTO } from '@/types/loan';
import { setStep } from '@/store/reducers/Loan';

export const Offers: FC<IOffersProps> = ({ offers }) => {
  const dispatch = useAppDispatch();

  const [offerAccepted, setOfferAccepted] = useState<boolean>(false);

  const handleAcceptOffer = async (offer: IPrescoringResponseDTO) => {
    try {
      await dispatch(applyOfferAsync(offer)).unwrap();
      localStorage.setItem(IS_OFFER_ACCEPTED, 'true');
      localStorage.setItem(STEP, '2');
      dispatch(setStep(2));
      setOfferAccepted(true);
    } catch {
      localStorage.removeItem(IS_OFFER_ACCEPTED);
      setOfferAccepted(false);
    }
  };

  useEffect(() => {
    const storedAccepted = localStorage.getItem(IS_OFFER_ACCEPTED);

    if (storedAccepted && storedAccepted === 'true') {
      setOfferAccepted(true);
    }
  }, []);

  if (offerAccepted) {
    return <OfferAccepted />;
  }

  return (
    <div className={styles.offers}>
      {offers.map((offer) => (
        <LoanOfferCard
          key={offer.rate}
          offer={offer}
          onAccept={handleAcceptOffer}
        />
      ))}
    </div>
  );
};
