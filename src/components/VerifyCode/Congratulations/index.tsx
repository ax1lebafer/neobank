import styles from './styles.module.scss';

import SurpriseImage from '@/assets/images/surprise.svg';
import { CustomButton } from '@components/UI/CustomButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const Congratulations = () => {
  const navigate = useNavigate();

  const handleEnd = () => {
    navigate(ROUTES.home);
  };

  return (
    <div className={styles.congratulations}>
      <img src={SurpriseImage} alt="Surprise" />

      <h2>Congratulations! You have completed your new credit card.</h2>

      <p>Your credit card will arrive soon. Thank you for choosing us!</p>

      <CustomButton onClick={handleEnd}>
        View other offers of our bank
      </CustomButton>
    </div>
  );
};
