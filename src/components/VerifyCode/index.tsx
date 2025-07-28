import styles from './styles.module.scss';
import { CodeInput } from '@components/VerifyCode/CodeInput';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useParams } from 'react-router-dom';
import { ISendCodeArgs } from '@/store/actions/Loan/types';
import { sendCodeAsync } from '@/store/actions/Loan';
import { useCallback } from 'react';
import { IS_VERIFY_CODE } from '@/constants/localStorageKeys';
import { Congratulations } from '@components/VerifyCode/Congratulations';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';

export const VerifyCode = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { error, isVerifyCode, loading } = useAppSelector(
    (state) => state.loan
  );

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
          <SkeletonBlock loading={loading} skeletonProps={{ width: 400 }}>
            <h2>Please enter confirmation code</h2>
          </SkeletonBlock>

          <SkeletonBlock
            loading={loading}
            skeletonProps={{ width: 300, height: 50 }}
          >
            <CodeInput onComplete={handleComplete} />
          </SkeletonBlock>

          {!!error && (
            <p className={styles.verify__error}>Invalid confirmation code</p>
          )}
        </>
      )}
    </section>
  );
};
