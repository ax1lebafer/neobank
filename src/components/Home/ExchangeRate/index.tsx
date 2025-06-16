import styles from './styles.module.scss';
import { CurrentCurrency } from '@components/Home/ExchangeRate/CurrentCurrency';
import { CURRENCIES } from '@components/Home/ExchangeRate/constants';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import BankImage from '@/assets/images/bank.svg';

export const ExchangeRate = () => {
  return (
    <section className={styles.exchange}>
      <article className={styles.exchange__card}>
        <div className={styles.exchange__left}>
          <h2 className={styles.exchange__title}>
            Exchange rate in internet bank
          </h2>
          <p className={styles.exchange__subtitle}>Currency</p>

          <CurrentCurrency currencies={CURRENCIES} />

          <Link className={styles.exchange__link} to={ROUTES.home}>
            All courses
          </Link>
        </div>

        <div className={styles.exchange__right}>
          <p className={styles.exchange__date}>
            Update every 15 minutes, MSC 09.08.2022
          </p>

          <img className={styles.exchange__image} src={BankImage} alt="Bank" />
        </div>
      </article>
    </section>
  );
};
