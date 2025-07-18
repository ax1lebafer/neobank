import { IScoringFormValues } from '@components/Application/ScoringForm/types';

export const SCORING_INITIAL_FORM_VALUES: IScoringFormValues = {
  gender: '',
  maritalStatus: '',
  dependentAmount: null,
  passportIssueDate: null,
  passportIssueBranch: '',
  employmentStatus: '',
  employerINN: null,
  salary: null,
  position: '',
  workExperienceTotal: null,
  workExperienceCurrent: null,
};

export const GENDER_OPTIONS = [
  { label: 'Male', value: 'MALE' },
  { label: 'Female', value: 'FEMALE' },
];

export const MARITAL_STATUS = [
  { label: 'Married', value: 'MARRIED' },
  { label: 'Divorced', value: 'DIVORCED' },
  { label: 'Single', value: 'SINGLE' },
  { label: 'Widow/Widower', value: 'WIDOW_WIDOWER' },
];
