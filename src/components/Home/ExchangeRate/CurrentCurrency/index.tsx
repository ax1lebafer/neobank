import styles from './styles.module.scss';
import { FC } from 'react';
import { ICurrentCurrencyProps } from '@components/Home/ExchangeRate/CurrentCurrency/types';

export const CurrentCurrency: FC<ICurrentCurrencyProps> = ({ currencies }) => {
  return (
    <ul className={styles.currencies}>
      {currencies.map((c) => (
        <li className={styles.currencies__item} key={c.currency}>
          <p className={styles.currencies__name}>{c.currency}:</p>
          <p>{c.value}</p>
        </li>
      ))}
    </ul>
  );
};
