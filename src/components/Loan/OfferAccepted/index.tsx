import styles from './styles.module.scss';

export const OfferAccepted = () => {
  return (
    <div className={styles.message}>
      <h2>The preliminary decision has been sent to your email.</h2>
      <p className={styles.message__description}>
        In the letter you can get acquainted with the preliminary decision on
        the credit card.
      </p>
    </div>
  );
};
