import styles from './styles.module.scss';
import Person from '@/assets/images/person.png';
import { FEATURES_LIST } from '@components/Home/Features/constants';

export const Features = () => {
  return (
    <section className={styles.features}>
      <img className={styles.features__image} src={Person} alt="Person logo" />

      <article className={styles.features__info}>
        <h2 className={styles.features__title}>
          We Provide Many Features You Can Use
        </h2>
        <p className={styles.features__description}>
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <ul className={styles.features__list}>
          {FEATURES_LIST.map((item) => (
            <li className={styles.features__item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
