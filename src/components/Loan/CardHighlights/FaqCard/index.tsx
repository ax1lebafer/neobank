import {
  FAQ_RECEIVING_CARD,
  FAQ_USING_CARD,
} from '@components/Loan/CardHighlights/FaqCard/constants';
import { Accordion } from '@components/shared/Accordion';
import styles from './styles.module.scss';

export const FaqCard = () => {
  return (
    <div className={styles.faq}>
      <section>
        <h2 className={styles.faq__title}>Issuing and receiving a card</h2>

        {FAQ_RECEIVING_CARD.map((item) => (
          <Accordion
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>

      <section>
        <h2 className={styles.faq__title}>Using a credit card</h2>

        {FAQ_USING_CARD.map((item) => (
          <Accordion
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>
    </div>
  );
};
