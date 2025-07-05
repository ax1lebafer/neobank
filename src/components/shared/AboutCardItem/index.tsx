import styles from './styles.module.scss';
import { FC } from 'react';
import { IAboutCardItemProps } from '@components/shared/AboutCardItem/types';

export const AboutCardItem: FC<IAboutCardItemProps> = ({
  icon,
  title,
  description,
  variant = 'primary',
}) => {
  return (
    <article
      className={styles.card}
      style={{
        backgroundColor: variant === 'primary' ? '#EAECEE' : '#7F92ACB2',
      }}
    >
      <img src={icon} alt={title} />
      <h2 className={styles.card__title}>{title}</h2>
      <p>{description}</p>
    </article>
  );
};
