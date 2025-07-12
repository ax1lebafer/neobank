import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { digitsNumberReg, REGULAR_ONLY_LETTER } from '@/constants/regular';
import { IPrescoringFormValues } from '@components/Loan/PrescoringForm/types';

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

export const PrescoringSchema: ObjectSchema<IPrescoringFormValues> =
  Yup.object<IPrescoringFormValues>().shape({
    amount: Yup.number()
      .required()
      .min(150000, 'Minimum amount - 150 000₽')
      .max(600000, 'Maximum amount - 600 000₽'),
    term: Yup.number().required(),
    firstName: Yup.string()
      .required('Enter your first name')
      .matches(REGULAR_ONLY_LETTER, 'Only letters'),
    lastName: Yup.string()
      .required('Enter your last name')
      .matches(REGULAR_ONLY_LETTER, 'Only letters'),
    middleName: Yup.string().optional().nullable(),
    email: Yup.string()
      .required('Incorrect email address')
      .email('Incorrect email address')
      .test('no-hyphens', 'Email must not contain hyphens', (value) =>
        value ? !value.includes('-') : true
      ),
    birthdate: Yup.date()
      .required('Incorrect date of birth')
      .max(eighteenYearsAgo, 'You must be at least 18 years old'),
    passportSeries: Yup.string()
      .required('The series must be 4 digits')
      .matches(digitsNumberReg(4), 'The series must be 4 digits'),
    passportNumber: Yup.string()
      .required('The number must be 6 digits')
      .matches(digitsNumberReg(6), 'The number must be 6 digits'),
  });
