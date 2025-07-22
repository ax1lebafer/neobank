import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { IScoringFormValues } from '@components/Application/ScoringForm/types';

export const ScoringSchema: ObjectSchema<IScoringFormValues> =
  Yup.object<IScoringFormValues>().shape({
    gender: Yup.string().required('Select one of the options'),
    maritalStatus: Yup.string().required('Select one of the options'),
    dependentAmount: Yup.number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .required('Select one of the options'),
    passportIssueDate: Yup.date()
      .required('Incorrect date of passport issue date')
      .max(new Date(), 'The date cannot be greater than the current one'),
    passportIssueBranch: Yup.string()
      .required('The series must be 6 digits')
      .length(7, 'The series must be 6 digits'),
    employmentStatus: Yup.string().required('Select one of the options'),
    employerINN: Yup.number()
      .transform((_, originalValue) =>
        typeof originalValue === 'string' && /^\d+$/.test(originalValue)
          ? parseInt(originalValue, 10)
          : originalValue
      )
      .typeError('Department code must be a number')
      .required('Department code must be 12 digits')
      .test(
        'len',
        'Department code must be 12 digits',
        (val) => typeof val === 'number' && String(val).length === 12
      ),
    salary: Yup.number()
      .transform((_, originalValue) =>
        typeof originalValue === 'string' && /^\d+$/.test(originalValue)
          ? parseInt(originalValue, 10)
          : originalValue
      )
      .typeError('Department code must be a number')
      .required('Enter your salary'),
    position: Yup.string().required('Select one of the options'),
    workExperienceTotal: Yup.number()
      .transform((_, originalValue) =>
        typeof originalValue === 'string' && /^\d+$/.test(originalValue)
          ? parseInt(originalValue, 10)
          : originalValue
      )
      .typeError('Work experience total must be a number')
      .required('Enter your work experience total')
      .max(60, 'Enter valid work experience total'),
    workExperienceCurrent: Yup.number()
      .transform((_, originalValue) =>
        typeof originalValue === 'string' && /^\d+$/.test(originalValue)
          ? parseInt(originalValue, 10)
          : originalValue
      )
      .typeError('Work experience total must be a number')
      .required('Enter your work experience current')
      .max(60, 'Enter valid work experience total'),
  });
