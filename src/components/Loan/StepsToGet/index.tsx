import styles from './styles.module.scss';
import { STEPS_TO_GET_CARD } from '@components/Loan/StepsToGet/constants';
import { StepItem } from '@components/Loan/StepsToGet/StepItem';

export const StepsToGet = () => {
  return (
    <section className={styles.steps}>
      <h2 className={styles.steps__title}>How to get a card</h2>

      <ol className={styles.steps__list}>
        {STEPS_TO_GET_CARD.map((text, idx) => (
          <StepItem index={idx + 1} text={text} key={idx} />
        ))}
      </ol>
    </section>
  );
};
