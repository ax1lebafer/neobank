import { SignDocument } from '@components/SignDocument';
import { useAppSelector } from '@/store/store';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const SignDocumentPage = () => {
  const { step } = useAppSelector((state) => state.loan);

  if (step !== 4) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SignDocument />
    </>
  );
};
