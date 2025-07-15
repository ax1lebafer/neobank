import styles from './styles.module.scss';

import SurpriseImage from '@/assets/images/surprise.svg';
import { FC } from 'react';
import { ILoanOfferCardProps } from '@components/Loan/LoanOfferCard/types';

export const LoanOfferCard: FC<ILoanOfferCardProps> = ({ offer }) => {
  const {
    requestedAmount,
    totalAmount,
    term,
    monthlyPayment,
    rate,
    isInsuranceEnabled,
    isSalaryClient,
  } = offer;

  return (
    <article className={styles.offer}>
      <img src={SurpriseImage} alt="Offer image" />
    </article>
  );
};
