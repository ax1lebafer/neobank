import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getNewsAsync } from '@/store/actions/News';
import { useEffect, useRef, useState } from 'react';
import { NewsCard } from '@components/Home/News/NewsSlider/NewsCard';

export const NewsSlider = () => {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);

  const { articles: newsResponse } = news || {};

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const STEP = 500;

  const handleGetNews = () => {
    dispatch(getNewsAsync({}));
  };

  const updateButtons = () => {
    const wr = sliderRef.current;
    if (!wr) return;
    setCanPrev(wr.scrollLeft > 0);
    setCanNext(wr.scrollLeft + wr.clientWidth < wr.scrollWidth);
  };

  useEffect(() => {
    updateButtons();
  }, [newsResponse]);

  const handlePrev = () => {
    sliderRef.current?.scrollBy({ left: -STEP, behavior: 'smooth' });
    setTimeout(updateButtons, 300);
  };
  const handleNext = () => {
    sliderRef.current?.scrollBy({ left: STEP, behavior: 'smooth' });
    setTimeout(updateButtons, 300);
  };

  useEffect(() => {
    handleGetNews();
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper} ref={sliderRef}>
        {newsResponse
          ?.filter(
            (
              item
            ): item is typeof item & {
              urlToImage: string;
              description: string;
            } => item.urlToImage !== null && item.description !== null
          )
          .map((news) => (
            <NewsCard
              key={news.url}
              src={news.urlToImage}
              title={news.title}
              description={news.description}
              url={news.url}
            />
          ))}
      </div>

      <div className={styles.slider__actions}>
        <p onClick={handlePrev}>Prev</p>
        <p onClick={handleNext}>Next</p>
      </div>
    </div>
  );
};
