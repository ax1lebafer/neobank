import styles from './styles.module.scss';
import { Tabs } from '@components/shared/Tabs';
import { CARD_TABS } from '@components/Loan/CardHighlights/constants';

export const CardHighlights = () => {
  return (
    <section className={styles.highlights}>
      <Tabs tabs={CARD_TABS} />
    </section>
  );
};
