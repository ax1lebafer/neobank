import styles from './styles.module.scss';
import { TextField } from '@components/shared/TextField';
import { Select } from '@components/shared/Select';
import { TERM_OPTIONS } from '@components/Loan/PrescoringForm/constants';

export const ContactInformationFields = () => {
  return (
    <div className={styles.fields}>
      <h3 className={styles.fields__title}>Contact Information</h3>
      <div className={styles.fields__form}>
        <TextField
          label="Your last name"
          required
          // error
          helperText="Enter your last name"
          placeholder="For exapmle Doe"
        />

        <TextField
          label="Your first name"
          required
          placeholder="For exapmle Jhon"
          helperText="Enter your first name"
        />

        <TextField
          label="Your patronymic"
          placeholder="For Example Victorovich"
        />

        <Select label="Select term" required options={TERM_OPTIONS} value={6} />

        <TextField
          label="Your email"
          type="email"
          required
          placeholder="test@gmail.com"
          helperText="Incorrect email address"
        />

        <TextField
          label="Your date of birth"
          type="date"
          required
          placeholder="Select Date and Time"
          helperText="Incorrect date of birth"
        />

        <TextField
          label="Your passport series"
          required
          placeholder="0000"
          type="number"
          helperText="The series must be 4 digits"
        />

        <TextField
          label="Your passport number"
          required
          type="number"
          placeholder="000000"
          helperText="The series must be 6 digits"
        />
      </div>
    </div>
  );
};
