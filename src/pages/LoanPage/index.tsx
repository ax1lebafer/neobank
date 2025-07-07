import { BannerSection } from '@components/Loan/BannerSection';
import { CardHighlights } from '@components/Loan/CardHighlights';
import { StepsToGet } from '@components/Loan/StepsToGet';

export const LoanPage = () => {
  return (
    <>
      <BannerSection />
      <CardHighlights />
      <StepsToGet />
      {/*<PrescoringForm />*/}
    </>
  );
};
