import styles from './styles.module.scss';
import { LoanOfferCard } from '@components/Loan/LoanOfferCard';
import { FC } from 'react';
import { IOffersProps } from '@components/Loan/FormStepsSection/Offers/types';

export const Offers: FC<IOffersProps> = ({ offers }) => {
  return (
    <div className={styles.offers}>
      {offers.map((offer) => (
        <LoanOfferCard key={offer.rate} offer={offer} />
      ))}
    </div>
  );
};
