import { ISelectOption } from '@components/shared/Select/types';
import { IPrescoringFormValues } from '@components/Loan/PrescoringForm/types';

export const TERM_OPTIONS: ISelectOption[] = [
  { label: '6 month', value: 6 },
  { label: '12 month', value: 12 },
  { label: '18 month', value: 18 },
  { label: '24 month', value: 24 },
];

export const PRESCORING_INITIAL_FORM_VALUES: IPrescoringFormValues = {
  amount: 150000,
  term: 6,
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  birthdate: null,
  passportSeries: '',
  passportNumber: '',
};
