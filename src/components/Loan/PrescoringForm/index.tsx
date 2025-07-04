import styles from './styles.module.scss';
import { TextField } from '@components/shared/TextField';

export const PrescoringForm = () => {
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
      </div>
    </form>
  );
};
