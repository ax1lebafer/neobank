import styles from './styles.module.scss';
import { ContactInformationFields } from '@components/Loan/PrescoringForm/ContactInformationFields';
import { CustomButton } from '@components/UI/CustomButton';
import { AmountSlider } from '@components/Loan/PrescoringForm/AmountSlider';
import { TextField } from '@components/shared/TextField';
import { useForm } from 'react-hook-form';
import { PRESCORING_INITIAL_FORM_VALUES } from '@components/Loan/PrescoringForm/constants';
import { IPrescoringFormValues } from '@components/Loan/PrescoringForm/types';
import { PrescoringSchema } from '@components/Loan/PrescoringForm/schema';
import { yupResolver } from '@hookform/resolvers/yup';

export const PrescoringForm = () => {
  const {
    control,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<IPrescoringFormValues>({
    defaultValues: PRESCORING_INITIAL_FORM_VALUES,
    resolver: yupResolver(PrescoringSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: IPrescoringFormValues) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

      <CustomButton className={styles.form__button} type="submit">
        Continue
      </CustomButton>
    </form>
  );
};
