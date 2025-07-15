import styles from './styles.module.scss';
import { FC } from 'react';
import { ILoanOfferCardProps } from '@components/Loan/LoanOfferCard/types';
import { CustomButton } from '@components/UI/CustomButton';

import SurpriseImage from '@/assets/images/surprise.svg';
import ValidIcon from '@/assets/icons/valid.svg';
import ErrorIcon from '@/assets/icons/error.svg';

const currency = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

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

  const items = [
    { label: 'Requested amount:', value: currency.format(requestedAmount) },
    { label: 'Total amount:', value: currency.format(totalAmount) },
    { label: 'For', value: `${term} months` },
    { label: 'Monthly payment:', value: currency.format(monthlyPayment) },
    { label: 'Your rate:', value: `${rate} %` },
    {
      label: 'Insurance included',
      value: isInsuranceEnabled ? (
        <img src={ValidIcon} alt="Valid" />
      ) : (
        <img src={ErrorIcon} alt="Error" />
      ),
    },
    {
      label: 'Salary client',
      value: isSalaryClient ? (
        <img src={ValidIcon} alt="Valid" />
      ) : (
        <img src={ErrorIcon} alt="Error" />
      ),
    },
  ];

  return (
    <article className={styles.offer}>
      <img src={SurpriseImage} alt="Offer image" />

      <ul className={styles.offer__list}>
        {items.map((item) => (
          <li key={item.label} className={styles.offer__item}>
            <span>{item.label}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>

      <CustomButton className={styles.offer__button}>Select</CustomButton>
    </article>
  );
};
