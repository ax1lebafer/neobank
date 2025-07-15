import { CustomIconButton } from '@components/UI/CustomIconButton';
import FlyIcon from '@/assets/icons/fly.svg';
import MailIcon from '@/assets/icons/mail.svg';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { subscribeSchema } from '@components/Home/Subscribe/SubscribeForm/schema';
import { ISubscribeFormValues } from '@components/Home/Subscribe/SubscribeForm/types';
import apiClient from '@/services/axiosInstance';
import { useEffect, useState } from 'react';
import { IS_SUBSCRIBED } from '@/constants/localStorageKeys';

export const SubscribeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ISubscribeFormValues>({
    resolver: yupResolver(subscribeSchema),
    defaultValues: { email: '' },
    mode: 'onChange',
  });

  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ISubscribeFormValues> = async (data) => {
    try {
      setError(null);
      await apiClient.post('/email', data);
      localStorage.setItem(IS_SUBSCRIBED, 'true');
      setSubscribed(true);
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }

      setError('unknown error');
    }
  };

  useEffect(() => {
    const subscribed = localStorage.getItem(IS_SUBSCRIBED);

    if (subscribed === 'true') {
      setSubscribed(true);
    }
  }, []);

  if (subscribed) {
    return (
      <div className={styles.form__success}>
        <p>You are already subscribed to the bank's newsletter</p>
      </div>
    );
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.form__inputWrapper}>
        <img src={MailIcon} alt="Mail icon" className={styles.form__icon} />
        <Controller
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Your email"
              className={styles.form__input}
            />
          )}
          name="email"
          control={control}
        />
      </div>
      {errors.email ? (
        <p role="alert" className={styles.form__error}>
          {errors.email.message}
        </p>
      ) : error ? (
        <p role="alert" className={styles.form__error}>
          {error}
        </p>
      ) : null}
      <CustomIconButton icon={FlyIcon} type="submit" disabled={isSubmitting}>
        Subscribe
      </CustomIconButton>
    </form>
  );
};
