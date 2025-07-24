import FileIcon from '@assets/icons/document.svg';
import CreditCardOffer from '@/assets/files/credit-card-offer.pdf';

import styles from './styles.module.scss';

export const AttachDownload = () => {
  return (
    <a
      className={styles.attach}
      href={CreditCardOffer}
      download="credit_card_offer.pdf"
    >
      <img src={FileIcon} alt="File icon" />
      <p>Information on your card</p>
    </a>
  );
};
