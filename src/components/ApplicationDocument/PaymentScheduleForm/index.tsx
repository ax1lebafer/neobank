import styles from './styles.module.scss';
import { Table } from '@components/shared/Table';
import { Checkbox } from '@components/UI/Checkbox';
import { useAppSelector } from '@/store/store';
import { DOCUMENT_COLUMNS } from '@components/ApplicationDocument/PaymentScheduleForm/constants';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';
import { CustomButton } from '@components/UI/CustomButton';

export const PaymentScheduleForm = () => {
  const { applicationById, loading } = useAppSelector((state) => state.loan);

  const { credit } = applicationById ?? {};

  return (
    <SkeletonBlock
      loading={loading}
      skeletonProps={{ height: 500, borderRadius: 28 }}
    >
      <form className={styles.form}>
        <div className={styles.form__header}>
          <h2>Payment Schedule</h2>
          <p className={styles.form__step}>Step 3 of 5</p>
        </div>
        <Table
          columns={DOCUMENT_COLUMNS}
          items={credit?.paymentSchedule || []}
        />

        <div>
          <CustomButton color="error">Deny</CustomButton>
          <Checkbox label="I agree with the payment schedule" />
        </div>
      </form>
    </SkeletonBlock>
  );
};
