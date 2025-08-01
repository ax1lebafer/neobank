import styles from './styles.module.scss';
import { ContactInformationFields } from '@components/Loan/FormStepsSection/PrescoringForm/ContactInformationFields';
import { CustomButton } from '@components/UI/CustomButton';
import { AmountSlider } from '@components/Loan/FormStepsSection/PrescoringForm/AmountSlider';
import { TextField } from '@components/shared/TextField';
import { Controller, useForm } from 'react-hook-form';
import { PRESCORING_INITIAL_FORM_VALUES } from '@components/Loan/FormStepsSection/PrescoringForm/constants';
import { IPrescoringFormValues } from '@components/Loan/FormStepsSection/PrescoringForm/types';
import { PrescoringSchema } from '@components/Loan/FormStepsSection/PrescoringForm/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { postPrescoringAsync } from '@/store/actions/Loan';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';
import { PRESCORING_OFFERS } from '@/constants/localStorageKeys';

export const PrescoringForm = () => {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.loan);

  const {
    control,
    formState: { errors, dirtyFields },
    handleSubmit,
    reset,
  } = useForm<IPrescoringFormValues>({
    defaultValues: PRESCORING_INITIAL_FORM_VALUES,
    resolver: yupResolver(PrescoringSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: IPrescoringFormValues) => {
    const payload: IPrescoringFormValues = {
      ...data,
      middleName: data.middleName === '' ? null : data.middleName,
    };

    try {
      const offers = await dispatch(postPrescoringAsync(payload)).unwrap();

      localStorage.setItem(PRESCORING_OFFERS, JSON.stringify(offers));

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SkeletonBlock
      loading={loading}
      skeletonProps={{ className: styles.form, borderRadius: 28, height: 600 }}
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit, (errs) =>
          console.log('Ошибки валидации:', errs)
        )}
      >
        <div className={styles.form__top}>
          <div className={styles.form__sliderBlock}>
            <div className={styles.form__titleWrapper}>
              <h2>Customize your card</h2>
              <p>Step 1 of 5</p>
            </div>
            <Controller
              render={({ field }) => <AmountSlider {...field} />}
              name="amount"
              control={control}
            />
          </div>

          <span className={styles.form__divider} />

          <div className={styles.form__inputBlock}>
            <h3>You have chosen the amount</h3>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="underline"
                  inputProps={{
                    endAdornment: <p>₽</p>,
                  }}
                  className={styles.form__input}
                  error={!!errors.amount}
                  helperText={errors.amount?.message}
                />
              )}
              control={control}
              name="amount"
            />
          </div>
        </div>

        <div className={styles.form__bottom}>
          <ContactInformationFields
            control={control}
            errors={errors}
            dirtyFields={dirtyFields}
          />
        </div>

        <CustomButton className={styles.form__button} type="submit">
          Continue
        </CustomButton>
      </form>
    </SkeletonBlock>
  );
};
