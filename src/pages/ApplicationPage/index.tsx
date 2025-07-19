import { ScoringForm } from '@components/Application/ScoringForm';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { useEffect, useState } from 'react';
import { PRESCORING_OFFERS } from '@/constants/localStorageKeys';

export const ApplicationPage = () => {
  const { id } = useParams();

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

  if (!applicationId || id !== applicationId) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ScoringForm />
    </>
  );
};
