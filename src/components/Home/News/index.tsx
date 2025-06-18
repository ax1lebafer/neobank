import styles from './styles.module.scss';

export const News = () => {
  return (
    <section className={styles.news}>
      <h2 className={styles.news__title}>
        Current news from the world of finance
      </h2>
      <p className={styles.news__description}>
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
    </section>
  );
};
