import { FC } from 'react';
import { INewsCardProps } from '@components/Home/News/NewsSlider/NewsCard/types';
import styles from './styles.module.scss';

export const NewsCard: FC<INewsCardProps> = ({
  src,
  title,
  url,
  description,
}) => {
  const handleOpenNews = () => {
    window.open(url);
  };
  return (
    <article className={styles.newsCard} onClick={handleOpenNews}>
      <img src={src} alt="News" className={styles.newsCard__image} />
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};
