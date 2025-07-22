import { ScoringForm } from '@components/Application/ScoringForm';
import { useEffect } from 'react';
import { SCORING } from '@/constants/localStorageKeys';
import { PendingMessage } from '@components/Application/PendingMessage';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setScoringSend } from '@/store/reducers/Loan';

export const ApplicationPage = () => {
  const dispatch = useAppDispatch();

  const { isScoringSend } = useAppSelector((state) => state.loan);

  useEffect(() => {
    const storedScoring = localStorage.getItem(SCORING);

    if (storedScoring) {
      dispatch(setScoringSend(true));
    }
  }, [isScoringSend, dispatch]);

  if (isScoringSend) {
    return <PendingMessage />;
  }

  return (
    <>
      <ScoringForm />
    </>
  );
};
