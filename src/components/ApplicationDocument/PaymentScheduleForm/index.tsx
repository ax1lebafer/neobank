import styles from './styles.module.scss';
import { Table } from '@components/shared/Table';
import { Checkbox } from '@components/UI/Checkbox';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { DOCUMENT_COLUMNS } from '@components/ApplicationDocument/PaymentScheduleForm/constants';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';
import { CustomButton } from '@components/UI/CustomButton';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { agreePaymentScheduleAsync } from '@/store/actions/Loan';
import { Modal } from '@components/UI/Modal';
import { resetLoanState, setStep } from '@/store/reducers/Loan';
import {
  IS_OFFER_ACCEPTED,
  IS_PAYMENT_SCHEDULE_ACCEPTED,
  PRESCORING_OFFERS,
  SCORING,
  STEP,
} from '@/constants/localStorageKeys';
import { ROUTES } from '@/routes';

export const PaymentScheduleForm = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { applicationById, loading } = useAppSelector((state) => state.loan);

  const { credit } = applicationById ?? {};

  const [isAgree, setIsAgree] = useState(false);
  const [openDenyModal, setOpenDenyModal] = useState(false);
  const [openNotificationModal, setOpenNotificationModal] = useState(false);

  const handleOpenDenyModal = () => {
    setOpenDenyModal(true);
  };

  const handleCloseDenyModal = () => {
    setOpenDenyModal(false);
  };

  const handleCloseNotificationModal = () => {
    setOpenNotificationModal(false);
    navigate(ROUTES.home);
  };

  const onSubmit = async () => {
    if (!id) return;

    try {
      await dispatch(agreePaymentScheduleAsync(id)).unwrap();
      dispatch(setStep(4));
      localStorage.setItem(STEP, '4');
      localStorage.setItem(IS_PAYMENT_SCHEDULE_ACCEPTED, 'true');
    } catch (error) {
      console.error(error);
    }
  };

  const onReject = () => {
    setOpenDenyModal(false);
    setOpenNotificationModal(true);
    dispatch(resetLoanState());
    localStorage.setItem(STEP, '1');
    localStorage.removeItem(IS_OFFER_ACCEPTED);
    localStorage.removeItem(PRESCORING_OFFERS);
    localStorage.removeItem(SCORING);
  };

  return (
    <SkeletonBlock
      loading={loading}
      skeletonProps={{ height: 500, borderRadius: 28 }}
    >
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className={styles.form__header}>
          <h2>Payment Schedule</h2>
          <p className={styles.form__step}>Step 3 of 5</p>
        </div>
        <Table
          columns={DOCUMENT_COLUMNS}
          items={credit?.paymentSchedule || []}
        />

        <div className={styles.form__footer}>
          <CustomButton
            className={styles.form__button}
            color="error"
            onClick={handleOpenDenyModal}
          >
            Deny
          </CustomButton>
          <div className={styles.form__argee}>
            <Checkbox
              label="I agree with the payment schedule"
              onChange={(e) => setIsAgree(e.target.checked)}
              checked={isAgree}
            />
            <CustomButton
              className={styles.form__button}
              disabled={!isAgree}
              type="submit"
            >
              Send
            </CustomButton>
          </div>
        </div>
      </form>

      <Modal
        open={openDenyModal}
        onClose={handleCloseDenyModal}
        onSubmit={onReject}
        title="Deny application"
        submitButtonLabel="Deny"
      >
        <p>You exactly sure, you want to cancel this application?</p>
      </Modal>

      <Modal
        open={openNotificationModal}
        onClose={handleCloseNotificationModal}
        title="Deny application"
        closeButtonLabel="Go home"
      >
        <p>Your application has been deny!</p>
      </Modal>
    </SkeletonBlock>
  );
};
