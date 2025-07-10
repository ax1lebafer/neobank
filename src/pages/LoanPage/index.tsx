import { BannerSection } from '@components/Loan/BannerSection';
import { CardHighlights } from '@components/Loan/CardHighlights';
import { StepsToGet } from '@components/Loan/StepsToGet';
import { PrescoringForm } from '@components/Loan/PrescoringForm';
import { useRef } from 'react';

export const LoanPage = () => {
  const prescoringRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    prescoringRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <>
      <BannerSection onApplyCard={scrollToForm} />
      <CardHighlights />
      <StepsToGet />
      <section ref={prescoringRef}>
        <PrescoringForm />
      </section>
    </>
  );
};
