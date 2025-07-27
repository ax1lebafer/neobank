import styles from './styles.module.scss';
import { CodeInput } from '@components/VerifyCode/CodeInput';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useParams } from 'react-router-dom';
import { ISendCodeArgs } from '@/store/actions/Loan/types';
import { sendCodeAsync } from '@/store/actions/Loan';
import { useCallback } from 'react';
import { IS_VERIFY_CODE } from '@/constants/localStorageKeys';
import { Congratulations } from '@components/VerifyCode/Congratulations';

export const VerifyCode = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { error, isVerifyCode } = useAppSelector((state) => state.loan);

  const handleComplete = useCallback(
    async (code: number) => {
      if (!id) return;

      try {
        const payload: ISendCodeArgs = {
          id,
          code,
        };

        await dispatch(sendCodeAsync(payload)).unwrap();
        localStorage.setItem(IS_VERIFY_CODE, 'true');
      } catch (error) {
        console.error(error);
        localStorage.removeItem(IS_VERIFY_CODE);
      }
    },
    [dispatch, id]
  );

  return (
    <section className={styles.verify}>
      {isVerifyCode ? (
        <Congratulations />
      ) : (
        <>
          <h2>Please enter confirmation code</h2>

          <CodeInput onComplete={handleComplete} />

          {!!error && (
            <p className={styles.verify__error}>Invalid confirmation code</p>
          )}
        </>
      )}
    </section>
  );
};
