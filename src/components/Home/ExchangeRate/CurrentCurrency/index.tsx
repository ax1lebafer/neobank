import styles from './styles.module.scss';
import { FC } from 'react';
import { ICurrentCurrencyProps } from '@components/Home/ExchangeRate/CurrentCurrency/types';
import { useAppSelector } from '@/store/store';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';

export const CurrentCurrency: FC<ICurrentCurrencyProps> = ({ currencies }) => {
  const { loading } = useAppSelector((state) => state.exchangeRate);

  return (
    <ul className={styles.currencies}>
      {currencies.map((c) => (
        <li className={styles.currencies__item} key={c.currency}>
          <SkeletonBlock loading={loading} skeletonProps={{ width: '10ch' }}>
            <p className={styles.currencies__name}>{c.currency}:</p>
            <p>{c.value}</p>
          </SkeletonBlock>
        </li>
      ))}
    </ul>
  );
};
