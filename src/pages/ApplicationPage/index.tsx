import { ScoringForm } from '@components/Application/ScoringForm';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { useEffect, useState } from 'react';
import { PRESCORING_OFFERS, SCORING } from '@/constants/localStorageKeys';
import { PendingMessage } from '@components/Application/PendingMessage';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setScoringSend } from '@/store/reducers/Loan';

export const ApplicationPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { isScoringSend } = useAppSelector((state) => state.loan);

  const [applicationId, setApplicationId] = useState<string | null>(null);

  useEffect(() => {
    const offers = localStorage.getItem(PRESCORING_OFFERS);

    if (offers) {
      const offersObj = JSON.parse(offers);

      const applicationId = offersObj?.[0].applicationId?.toString();

      if (applicationId) {
        setApplicationId(applicationId);
      }
    }
  }, []);

  useEffect(() => {
    const storedScoring = localStorage.getItem(SCORING);

    if (storedScoring) {
      dispatch(setScoringSend(true));
    }
  }, [isScoringSend, dispatch]);

  if (!applicationId || id !== applicationId) {
    return <NotFoundPage />;
  }

  if (isScoringSend) {
    return <PendingMessage />;
  }

  return (
    <>
      <ScoringForm />
    </>
  );
};
