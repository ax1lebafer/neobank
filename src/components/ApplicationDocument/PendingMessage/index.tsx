import styles from '@components/Application/PendingMessage/styles.module.scss';

export const PendingMessage = () => {
  return (
    <div className={styles.pending}>
      <h2>Documents are formed</h2>
      <p className={styles.pending__sub}>
        Documents for signing will be sent to your email
      </p>
    </div>
  );
};
