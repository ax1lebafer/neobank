import { PaymentScheduleForm } from '@components/ApplicationDocument/PaymentScheduleForm';
import styles from './styles.module.scss';

export const ApplicationDocument = () => {
  return (
    <section className={styles.payment}>
      <PaymentScheduleForm />
    </section>
  );
};
