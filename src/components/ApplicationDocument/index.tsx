import { PaymentScheduleForm } from '@components/ApplicationDocument/PaymentScheduleForm';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useParams } from 'react-router-dom';
import { PendingMessage } from '@components/ApplicationDocument/PendingMessage';
import { useEffect } from 'react';
import { getApplicationById } from '@/store/actions/Loan';

export const ApplicationDocument = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { isAgreeWithPaymentSchedule } = useAppSelector((state) => state.loan);

  useEffect(() => {
    if (!id || isAgreeWithPaymentSchedule) return;

    dispatch(getApplicationById(id));
  }, [id, dispatch, isAgreeWithPaymentSchedule]);

  return (
    <section className={styles.payment}>
      {isAgreeWithPaymentSchedule ? (
        <PendingMessage />
      ) : (
        <PaymentScheduleForm />
      )}
    </section>
  );
};
