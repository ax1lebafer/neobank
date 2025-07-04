import styles from './styles.module.scss';
import { CustomButton } from '@components/UI/CustomButton';
import { BANK_CARDS } from '@components/Home/Greetings/constants';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const Greetings = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.greetings}>
      <div className={styles.greetings__left}>
        <h1 className={styles.greetings__title}>
          Choose the design you like and apply for card right now
        </h1>

        <CustomButton onClick={() => navigate(ROUTES.loan)}>
          Choose the card
        </CustomButton>
      </div>

      <div className={styles.greetings__right}>
        {BANK_CARDS.map((card) => (
          <img
            className={styles.greetings__card}
            key={card.src}
            src={card.src}
            alt={card.alt}
          />
        ))}
      </div>
    </section>
  );
};
