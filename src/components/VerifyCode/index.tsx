import styles from './styles.module.scss';
import { CodeInput } from '@components/VerifyCode/CodeInput';
import { useAppSelector } from '@/store/store';

export const VerifyCode = () => {
  const { error } = useAppSelector((state) => state.loan);

  return (
    <section className={styles.verify}>
      <h2>Please enter confirmation code</h2>

      <CodeInput onComplete={() => null} />

      {error && <p className={styles.verify__error}>{error}</p>}
    </section>
  );
};
