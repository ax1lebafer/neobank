import styles from './styles.module.scss';
import { CodeInput } from '@components/VerifyCode/CodeInput';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useParams } from 'react-router-dom';
import { ISendCodeArgs } from '@/store/actions/Loan/types';
import { sendCodeAsync } from '@/store/actions/Loan';
import { useCallback } from 'react';

export const VerifyCode = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.loan);

  const handleComplete = useCallback(
    (code: number) => {
      if (!id) return;

      const payload: ISendCodeArgs = {
        id,
        code,
      };

      dispatch(sendCodeAsync(payload));
    },
    [dispatch, id]
  );

  return (
    <section className={styles.verify}>
      <h2>Please enter confirmation code</h2>

      <CodeInput onComplete={handleComplete} />

      {!!error && (
        <p className={styles.verify__error}>Invalid confirmation code</p>
      )}
    </section>
  );
};
