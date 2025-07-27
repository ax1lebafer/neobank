import styles from './styles.module.scss';
import { CodeInput } from '@components/VerifyCode/CodeInput';

export const VerifyCode = () => {
  return (
    <section className={styles.verify}>
      <h2>Please enter confirmation code</h2>

      <CodeInput onComplete={() => null} />
    </section>
  );
};
