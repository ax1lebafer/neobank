import styles from './styles.module.scss';
import { ContactInformationFields } from '@components/Loan/PrescoringForm/ContactInformationFields';
import { CustomButton } from '@components/UI/CustomButton';
import { AmountSlider } from '@components/Loan/PrescoringForm/AmountSlider';
import { TextField } from '@components/shared/TextField';

export const PrescoringForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form__top}>
        <div className={styles.form__sliderBlock}>
          <div className={styles.form__titleWrapper}>
            <h2>Customize your card</h2>
            <p>Step 1 of 5</p>
          </div>
          <AmountSlider value={400000} />
        </div>

        <span className={styles.form__divider} />

        <div className={styles.form__inputBlock}>
          <h3>You have chosen the amount</h3>
          <TextField
            variant="underline"
            inputProps={{
              endAdornment: <p>₽</p>,
            }}
            className={styles.form__input}
          />
        </div>
      </div>

      <div className={styles.form__bottom}>
        <ContactInformationFields />
      </div>

      <CustomButton className={styles.form__button}>Continue</CustomButton>
    </form>
  );
};
