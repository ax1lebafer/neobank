import styles from './styles.module.scss';
import { Table } from '@components/shared/Table';
import {
  DOCUMENT_COLUMNS,
  DOCUMENT_ITEMS,
} from '@/pages/ApplicationDocumentPage/constants';
import { Checkbox } from '@components/UI/Checkbox';

export const PaymentScheduleForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form__header}>
        <h2>Payment Schedule</h2>
        <p className={styles.form__step}>Step 3 of 5</p>
      </div>
      <Table columns={DOCUMENT_COLUMNS} items={DOCUMENT_ITEMS} />

      <Checkbox label="I agree with the payment schedule" />
    </form>
  );
};
