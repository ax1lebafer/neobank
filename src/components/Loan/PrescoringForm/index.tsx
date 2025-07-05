import styles from './styles.module.scss';
import { TextField } from '@components/shared/TextField';
import { Select } from '@components/shared/Select';
import { ISelectOption } from '@components/shared/Select/types';

export const PrescoringForm = () => {
  const OPTIONS: ISelectOption[] = [{ label: '1 month', value: 1 }];
  return (
    <form className={styles.form}>
      <div className={styles.form__top}>
        <div></div>
      </div>

      <div className={styles.form__bottom}>
        <TextField
          label="Your last name"
          required
          error
          helperText="Enter your name"
          placeholder="For exapmle Doe"
        />

        <TextField
          label="Your first name"
          required
          // error
          helperText="Enter your name"
        />

        <Select label="Enter period" required options={OPTIONS} value={1} />
      </div>
    </form>
  );
};
