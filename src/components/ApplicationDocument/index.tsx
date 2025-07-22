import { PaymentScheduleForm } from '@components/ApplicationDocument/PaymentScheduleForm';
import styles from './styles.module.scss';
import { useAppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { getApplicationById } from '@/store/actions/Loan';
import { useParams } from 'react-router-dom';

export const ApplicationDocument = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) return;

    dispatch(getApplicationById(id));
  }, [id, dispatch]);

  return (
    <section className={styles.payment}>
      <PaymentScheduleForm />
    </section>
  );
};
