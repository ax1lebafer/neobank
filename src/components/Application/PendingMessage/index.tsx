import styles from './styles.module.scss';
import { useAppDispatch } from '@/store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getApplicationById } from '@/store/actions/Loan';
import { EApplicationStatus } from '@/types/application';
import { ROUTES } from '@/routes';
import {
  IS_OFFER_ACCEPTED,
  PRESCORING_OFFERS,
  SCORING,
  STEP,
} from '@/constants/localStorageKeys';
import { resetOffers, setScoringSend, setStep } from '@/store/reducers/Loan';

export const PendingMessage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setTimeout(async () => {
        try {
          const response = await dispatch(getApplicationById(id)).unwrap();

          if (response.status === EApplicationStatus.CC_DENIED) {
            navigate(ROUTES.home);
            localStorage.removeItem(IS_OFFER_ACCEPTED);
            localStorage.removeItem(PRESCORING_OFFERS);
            localStorage.removeItem(SCORING);
            localStorage.setItem(STEP, '1');
            dispatch(resetOffers());
            dispatch(setScoringSend(false));
            dispatch(setStep(1));
          }
        } catch (error) {
          console.log(error);
        }
      }, 15000);
    }
  }, [id, dispatch, navigate]);

  return (
    <section className={styles.pending}>
      <h2>Wait for a decision on the application</h2>
      <p className={styles.pending__sub}>
        The answer will come to your mail within 10 minutes
      </p>
    </section>
  );
};
