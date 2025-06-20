import styles from './styles.module.scss';
import NotFoundImage from '@/assets/images/not_found.svg';
import { CustomButton } from '@components/UI/CustomButton';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__content}>
        <h2>Oops...</h2>
        <h2 className={styles.notFound__title}>Page not found</h2>
        <p className={styles.notFound__description}>
          This Page doesn't exist or was removed! We suggest you go back.
        </p>
        <CustomButton
          className={styles.notFound__button}
          onClick={() => navigate(-1)}
        >
          Go back
        </CustomButton>
      </div>
      <img
        className={styles.notFound__image}
        src={NotFoundImage}
        alt="Not found"
      />
    </section>
  );
};
