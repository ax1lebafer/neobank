import styles from './styles.module.scss';
import { Table } from '@components/shared/Table';
import { Checkbox } from '@components/UI/Checkbox';
import { useAppSelector } from '@/store/store';
import { DOCUMENT_COLUMNS } from '@components/ApplicationDocument/PaymentScheduleForm/constants';

export const PaymentScheduleForm = () => {
  const { applicationById } = useAppSelector((state) => state.loan);

  const { credit } = applicationById ?? {};

  return (
    <form className={styles.form}>
      <div className={styles.form__header}>
        <h2>Payment Schedule</h2>
        <p className={styles.form__step}>Step 3 of 5</p>
      </div>
      <Table columns={DOCUMENT_COLUMNS} items={credit?.paymentSchedule || []} />

      <Checkbox label="I agree with the payment schedule" />
    </form>
  );
};
