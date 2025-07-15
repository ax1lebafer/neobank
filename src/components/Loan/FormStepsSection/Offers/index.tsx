import styles from './styles.module.scss';
import { LoanOfferCard } from '@components/Loan/LoanOfferCard';
import { FC } from 'react';
import { IPrescoringResponseDTO } from '@/types/loan';

export const Offers: FC<{ offers: IPrescoringResponseDTO[] }> = ({
  offers,
}) => {
  // const { offers } = useAppSelector((state) => state.loan);

  return (
    <div className={styles.offers}>
      {offers.map((offer) => (
        <LoanOfferCard key={offer.rate} offer={offer} />
      ))}
    </div>
  );
};
