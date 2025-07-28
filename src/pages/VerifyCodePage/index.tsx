import { VerifyCode } from '@components/VerifyCode';
import { useAppSelector } from '@/store/store';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const VerifyCodePage = () => {
  const { step } = useAppSelector((state) => state.loan);

  if (step !== 5) {
    return <NotFoundPage />;
  }

  return (
    <>
      <VerifyCode />
    </>
  );
};
