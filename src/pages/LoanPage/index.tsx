import { BannerSection } from '@components/Loan/BannerSection';
import { PrescoringForm } from '@components/Loan/PrescoringForm';
import { CardHighlights } from '@components/Loan/CardHighlights';

export const LoanPage = () => {
  return (
    <>
      <BannerSection />
      <CardHighlights />
      <PrescoringForm />
    </>
  );
};
