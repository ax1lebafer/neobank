import styles from './styles.module.scss';
import { CASHBACK_OF_CARD } from '@components/Loan/CardHighlights/Cashback/constants';
import { CashbackCardItem } from '@components/shared/CashbackCardItem';

export const Cashback = () => {
  return (
    <div className={styles.cashback}>
      {CASHBACK_OF_CARD.map((item) => (
        <CashbackCardItem
          key={item.title}
          title={item.title}
          cashback={item.cashback}
          variant={item.variant as 'secondary'}
        />
      ))}
    </div>
  );
};
