import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { digitsNumberReg, REGULAR_ONLY_LETTER } from '@/constants/regular';
import { IPrescoringFormValues } from '@components/Loan/PrescoringForm/types';

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
    email: Yup.string().required().email('Incorrect email address'),
    birthdate: Yup.date()
      .required('Incorrect date of birth')
      .max(
        new Date().setFullYear(new Date().getFullYear() - 18),
        'You must be at least 18 years old'
      ),
    passportSeries: Yup.string()
      .required('The series must be 4 digits')
      .matches(digitsNumberReg(4), 'The series must be 4 digits'),
    passportNumber: Yup.string()
      .required('The number must be 6 digits')
      .matches(digitsNumberReg(6), 'The number must be 6 digits'),
  });
