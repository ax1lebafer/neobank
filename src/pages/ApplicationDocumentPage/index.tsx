import { ApplicationDocument } from '@components/ApplicationDocument';
import { useAppSelector } from '@/store/store';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const ApplicationDocumentPage = () => {
  const { step } = useAppSelector((state) => state.loan);

  if (step !== 3) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ApplicationDocument />
    </>
  );
};
