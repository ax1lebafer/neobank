import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getNewsAsync } from '@/store/actions/News';
import { useEffect, useRef, useState } from 'react';
import { NewsCard } from '@components/Home/News/NewsSlider/NewsCard';
import { IconButton } from '@components/UI/IconButton';
import { ArrowIcon } from '@assets/iconComponents/ArrowIcon';
import Skeleton from 'react-loading-skeleton';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';

export const NewsSlider = () => {
  const dispatch = useAppDispatch();
  const { news, loading } = useAppSelector((state) => state.news);

  const { articles: newsResponse } = news || {};

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const STEP = 500;

  const updateButtons = () => {
    const wr = sliderRef.current;
    if (!wr) return;
    setCanPrev(wr.scrollLeft > 1);
    setCanNext(wr.scrollLeft + wr.clientWidth < wr.scrollWidth - 1);
  };

  useEffect(() => {
    const wr = sliderRef.current;
    if (!wr) return;
    wr.addEventListener('scroll', updateButtons, { passive: true });
    updateButtons();
    return () => {
      wr.removeEventListener('scroll', updateButtons);
    };
  }, [newsResponse]);

  const handlePrev = () => {
    sliderRef.current?.scrollBy({ left: -STEP, behavior: 'smooth' });
  };
  const handleNext = () => {
    sliderRef.current?.scrollBy({ left: STEP, behavior: 'smooth' });
  };

  const renderSkeletons = () =>
    Array.from({ length: 4 }, (_, i) => (
      <Skeleton key={i} width={320} height={400} borderRadius={25} />
    ));

  useEffect(() => {
    dispatch(getNewsAsync({}));
  }, [dispatch]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.slider__wrapper}
        ref={sliderRef}
        onScroll={updateButtons}
      >
        {loading
          ? renderSkeletons()
          : newsResponse
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
        <SkeletonBlock
          loading={loading}
          skeletonProps={{ circle: true, width: 64, height: 64 }}
        >
          <IconButton
            icon={<ArrowIcon color={canPrev ? 'white' : 'black'} />}
            disabled={!canPrev}
            onClick={handlePrev}
            iconProps={{ rotate: 180 }}
          />
        </SkeletonBlock>
        <SkeletonBlock
          loading={loading}
          skeletonProps={{ circle: true, width: 64, height: 64 }}
        >
          <IconButton
            icon={<ArrowIcon color={canNext ? 'white' : 'black'} />}
            disabled={!canNext}
            onClick={handleNext}
          />
        </SkeletonBlock>
      </div>
    </div>
  );
};
