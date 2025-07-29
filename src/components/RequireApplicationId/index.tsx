import { Outlet, useParams } from 'react-router-dom';
import { PRESCORING_OFFERS } from '@/constants/localStorageKeys';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const RequireApplicationId = () => {
  const { id } = useParams();
  const offers = localStorage.getItem(PRESCORING_OFFERS);
  const applicationId =
    offers && JSON.parse(offers)?.[0]?.applicationId?.toString();

  if (!applicationId || id !== applicationId) {
    return <NotFoundPage />;
  }

  return <Outlet />;
};
