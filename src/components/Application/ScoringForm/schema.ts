import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { IScoringFormValues } from '@components/Application/ScoringForm/types';
import { digitsNumberReg } from '@/constants/regular';

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
    passportIssueDate: Yup.date().required(
      'Incorrect date of passport issue date'
    ),
    passportIssueBranch: Yup.string()
      .required('The series must be 6 digits')
      .matches(digitsNumberReg(6), 'The series must be 6 digits'),
    employmentStatus: Yup.string().required('Select one of the options'),
    employerINN: Yup.number().required('Department code must be 12 digits'),
    salary: Yup.number().required('Enter your salary'),
    position: Yup.string().required('Select one of the options'),
    workExperienceTotal: Yup.number().required(
      'Enter your work experience total'
    ),
    workExperienceCurrent: Yup.number().required(
      'Enter your work experience current'
    ),
  });
