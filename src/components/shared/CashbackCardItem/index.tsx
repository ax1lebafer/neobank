import styles from './styles.module.scss';
import { FC } from 'react';
import { ICashbackCardItemProps } from '@components/shared/CashbackCardItem/types';

export const CashbackCardItem: FC<ICashbackCardItemProps> = ({
  cashback,
  title,
  variant = 'primary',
}) => {
  const backgroundColor = variant === 'primary' ? '#EAECEE' : '#88B3B899';

  return (
    <article className={styles.card} style={{ backgroundColor }}>
      <p className={styles.card__title}>{title}</p>
      <p className={styles.card__cashback}>{cashback}</p>
    </article>
  );
};
