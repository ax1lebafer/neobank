import { IScoringFormValues } from '@components/Application/ScoringForm/types';

export const SCORING_INITIAL_FORM_VALUES: IScoringFormValues = {
  gender: '',
  maritalStatus: '',
  dependentAmount: null,
  passportIssueDate: null,
  passportIssueBranch: '',
  employmentStatus: '',
  employerINN: '',
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
  { label: '0', value: 0 },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];

export const EMPLOYMENT_STATUS_OPTIONS = [
  { label: 'Unemployed', value: 'UNEMPLOYED' },
  { label: 'Self employed', value: 'SELF_EMPLOYED' },
  { label: 'Employed', value: 'EMPLOYED' },
  { label: 'Business owner', value: 'BUSINESS_OWNER' },
];

export const POSITION_OPTIONS = [
  { label: 'Worker', value: 'WORKER' },
  { label: 'Mid manager', value: 'MID_MANAGER' },
  { label: 'Top manager', value: 'TOP_MANAGER' },
  { label: 'Owner', value: 'OWNER' },
];
