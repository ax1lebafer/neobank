import styles from './styles.module.scss';

export const PendingMessage = () => {
  return (
    <section className={styles.pending}>
      <h2>Wait for a decision on the application</h2>
      <p className={styles.pending__sub}>
        The answer will come to your mail within 10 minutes
      </p>
    </section>
  );
};
