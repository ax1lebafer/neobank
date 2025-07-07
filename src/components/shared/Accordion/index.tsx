import { FC, useState } from 'react';
import { IAccordionProps } from '@components/shared/Accordion/types';
import styles from './styles.module.scss';
import ExpandIcon from '@/assets/icons/expand_up.svg';
import cn from 'classnames';

export const Accordion: FC<IAccordionProps> = ({
  question,
  answer,
  expanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className={cn(styles.accordion, isExpanded && styles.accordion__open)}>
      <div className={styles.accordion__summary} onClick={handleExpand}>
        <p className={styles.accordion__question}>{question}</p>
        <button
          className={styles.accordion__button}
          onClick={handleExpand}
          aria-expanded={isExpanded}
        >
          <img
            src={ExpandIcon}
            alt={isExpanded ? 'Collapse' : 'Expand'}
            className={styles.accordion__icon}
          />
        </button>
      </div>

      <div className={styles.accordion__details}>
        <div className={styles.accordion__content}>
          <p className={styles.accordion__answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
};
