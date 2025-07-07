import { FC } from 'react';
import { IStepItemProps } from '@components/Loan/StepsToGet/StepItem/types';
import styles from './styles.module.scss';

export const StepItem: FC<IStepItemProps> = ({ index, text }) => {
  return (
    <li className={styles.step}>
      <div className={styles.step__top}>
        <div className={styles.step__index}>
          <p>{index}</p>
        </div>
        <div className={styles.step__line}></div>
      </div>
      <p className={styles.step__description}>{text}</p>
    </li>
  );
};
