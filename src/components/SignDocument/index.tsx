import styles from './styles.module.scss';
import { SignForm } from '@components/SignDocument/SignForm';
import { useAppSelector } from '@/store/store';
import { PendingMessage } from '@components/shared/PendingMessage';

export const SignDocument = () => {
  const { isSignDocument } = useAppSelector((state) => state.loan);

  return (
    <section className={styles.sign}>
      {isSignDocument ? (
        <PendingMessage
          title="Documents have been successfully signed and sent for approval"
          description="Within 10 minutes you will be sent a PIN code to your email for confirmation"
        />
      ) : (
        <SignForm />
      )}
    </section>
  );
};
