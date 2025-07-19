import { ScoringForm } from '@components/Application/ScoringForm';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { useEffect, useState } from 'react';
import { PRESCORING_OFFERS, SCORING } from '@/constants/localStorageKeys';
import { PendingMessage } from '@components/Application/PendingMessage';

export const ApplicationPage = () => {
  const { id } = useParams();

  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [isScoringSend, setIsScoringSend] = useState(false);

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
      setIsScoringSend(true);
    }
  }, []);

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
