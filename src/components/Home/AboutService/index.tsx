import styles from './styles.module.scss';
import WorldMap from '@/assets/images/world_map.svg';

export const AboutService = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.services__title}>
        You can use our services anywhere in the world
      </h2>
      <p className={styles.services__subtitle}>
        Withdraw and transfer money online through our application
      </p>

      <img className={styles.services__image} src={WorldMap} alt="World map" />
    </section>
  );
};
