import { SignDocument } from '@components/SignDocument';
import { useAppSelector } from '@/store/store';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const SignDocumentPage = () => {
  const { step } = useAppSelector((state) => state.loan);

  if (![4, 5].includes(step)) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SignDocument />
    </>
  );
};
