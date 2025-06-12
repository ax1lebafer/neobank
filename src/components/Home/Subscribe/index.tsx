import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { SubscribeForm } from '@components/Home/Subscribe/SubscribeForm';

export const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <Link className={styles.subscribe__link} to={ROUTES.home}>
        Support
      </Link>

      <h2 className={styles.subscribe__title}>Subscribe Newsletter & get</h2>
      <h2 className={styles.subscribe__subtitle}>Bank News</h2>

      <SubscribeForm />
    </section>
  );
};
