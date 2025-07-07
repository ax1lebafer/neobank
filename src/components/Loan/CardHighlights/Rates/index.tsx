import { RATES_CARD } from '@components/Loan/CardHighlights/Rates/constants';
import styles from './styles.module.scss';

export const Rates = () => {
  return (
    <ul className={styles.rates}>
      {RATES_CARD.map((item) => (
        <li className={styles.rates__item}>
          <p className={styles.rates__title}>{item.name}</p>
          <p className={styles.rates__description}>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};
