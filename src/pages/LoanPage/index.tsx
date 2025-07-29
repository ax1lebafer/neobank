import { BannerSection } from '@components/Loan/BannerSection';
import { CardHighlights } from '@components/Loan/CardHighlights';
import { StepsToGet } from '@components/Loan/StepsToGet';
import { useRef } from 'react';
import { FormStepsSection } from '@components/Loan/FormStepsSection';

export const LoanPage = () => {
  const prescoringRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    prescoringRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <BannerSection onApplyCard={scrollToForm} />
      <CardHighlights />
      <StepsToGet />
      <FormStepsSection ref={prescoringRef} />
    </>
  );
};
