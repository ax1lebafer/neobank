import { IScoringFormValues } from '@components/Application/ScoringForm/types';

export const SCORING_INITIAL_FORM_VALUES: IScoringFormValues = {
  gender: '',
  maritalStatus: '',
  dependentAmount: undefined,
  passportIssueDate: undefined,
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

export const DEPENDENTS_OPTIONS = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];
