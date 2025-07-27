import styles from './styles.module.scss';

import SurpriseImage from '@/assets/images/surprise.svg';
import { CustomButton } from '@components/UI/CustomButton';

export const Congratulations = () => {
  return (
    <div className={styles.congratulations}>
      <img src={SurpriseImage} alt="Surprise" />

      <h2>Congratulations! You have completed your new credit card.</h2>

      <p>Your credit card will arrive soon. Thank you for choosing us!</p>

      <CustomButton>View other offers of our bank</CustomButton>
    </div>
  );
};
