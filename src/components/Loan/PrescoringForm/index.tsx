import styles from './styles.module.scss';
import { ContactInformationFields } from '@components/Loan/PrescoringForm/ContactInformationFields';
import { CustomButton } from '@components/UI/CustomButton';

export const PrescoringForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form__top}>
        <div></div>
      </div>

      <div className={styles.form__bottom}>
        <ContactInformationFields />
      </div>

      <CustomButton className={styles.form__button}>Continue</CustomButton>
    </form>
  );
};
