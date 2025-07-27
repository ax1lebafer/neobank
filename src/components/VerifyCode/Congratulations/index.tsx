import styles from './styles.module.scss';

import SurpriseImage from '@/assets/images/surprise.svg';
import { CustomButton } from '@components/UI/CustomButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';
import {
  IS_OFFER_ACCEPTED,
  IS_PAYMENT_SCHEDULE_ACCEPTED,
  IS_SIGN_DOCUMENT,
  IS_VERIFY_CODE,
  PRESCORING_OFFERS,
  SCORING,
  STEP,
} from '@/constants/localStorageKeys';
import { useAppDispatch } from '@/store/store';
import { resetLoanState } from '@/store/reducers/Loan';

export const Congratulations = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEnd = () => {
    navigate(ROUTES.home);
    localStorage.removeItem(IS_OFFER_ACCEPTED);
    localStorage.removeItem(IS_PAYMENT_SCHEDULE_ACCEPTED);
    localStorage.removeItem(IS_SIGN_DOCUMENT);
    localStorage.removeItem(IS_VERIFY_CODE);
    localStorage.removeItem(PRESCORING_OFFERS);
    localStorage.removeItem(SCORING);
    localStorage.setItem(STEP, '1');

    dispatch(resetLoanState());
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
