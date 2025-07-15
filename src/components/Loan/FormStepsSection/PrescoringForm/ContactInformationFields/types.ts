import { Control, FieldErrors, UseFormStateReturn } from 'react-hook-form';
import { IPrescoringFormValues } from '@components/Loan/FormStepsSection/PrescoringForm/types';

export interface IContactInformationFieldsProps {
  control: Control<IPrescoringFormValues>;
  errors: FieldErrors<IPrescoringFormValues>;
  dirtyFields: UseFormStateReturn<IPrescoringFormValues>['dirtyFields'];
}
