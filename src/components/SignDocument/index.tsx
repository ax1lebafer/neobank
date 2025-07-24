import styles from './styles.module.scss';
import { SignForm } from '@components/SignDocument/SignForm';

export const SignDocument = () => {
  return (
    <section className={styles.sign}>
      <SignForm />
    </section>
  );
};
