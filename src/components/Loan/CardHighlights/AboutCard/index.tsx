import styles from './styles.module.scss';
import { ABOUT_CARD } from '@components/Loan/CardHighlights/AboutCard/constants';
import { AboutCardItem } from '@components/shared/AboutCardItem';

export const AboutCard = () => {
  return (
    <div className={styles.about}>
      {ABOUT_CARD.map((item) => (
        <AboutCardItem
          icon={item.icon}
          title={item.title}
          description={item.description}
          variant={item.variant as 'primary' | 'secondary'}
          key={item.title}
        />
      ))}
    </div>
  );
};
