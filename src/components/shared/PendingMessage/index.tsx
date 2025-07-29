import { FC } from 'react';
import { IPendingMessageProps } from '@components/shared/PendingMessage/types';
import styles from './styles.module.scss';

export const PendingMessage: FC<IPendingMessageProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.pending}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
