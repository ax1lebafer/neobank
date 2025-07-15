import { PrescoringForm } from '@components/Loan/PrescoringForm';
import { FC } from 'react';
import { IFormStepsSectionProps } from '@components/Loan/FormStepsSection/types';

export const FormStepsSection: FC<IFormStepsSectionProps> = ({ ref }) => {
  return (
    <section ref={ref}>
      <PrescoringForm />
    </section>
  );
};
