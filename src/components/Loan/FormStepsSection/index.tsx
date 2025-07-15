import { PrescoringForm } from '@components/Loan/FormStepsSection/PrescoringForm';
import { FC, useEffect } from 'react';
import { IFormStepsSectionProps } from '@components/Loan/FormStepsSection/types';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { PRESCORING_OFFERS } from '@/constants/localStorageKeys';
import { setOffers } from '@/store/reducers/Loan';
import { Offers } from '@components/Loan/FormStepsSection/Offers';

export const FormStepsSection: FC<IFormStepsSectionProps> = ({ ref }) => {
  const dispatch = useAppDispatch();
  const { offers } = useAppSelector((state) => state.loan);

  const isOffersAvailable = offers && offers.length > 0;

  useEffect(() => {
    const storedOffers = localStorage.getItem(PRESCORING_OFFERS);

    if (storedOffers) {
      try {
        const offers = JSON.parse(storedOffers);

        dispatch(setOffers(offers));
      } catch {
        localStorage.removeItem(PRESCORING_OFFERS);
      }
    }
  }, [dispatch]);

  return (
    <section ref={ref}>
      {!isOffersAvailable ? <PrescoringForm /> : <Offers offers={offers} />}
    </section>
  );
};
