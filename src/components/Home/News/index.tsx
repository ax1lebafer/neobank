import styles from './styles.module.scss';
import { NewsSlider } from '@components/Home/News/NewsSlider';
import { useAppSelector } from '@/store/store';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';

export const News = () => {
  const { loading } = useAppSelector((state) => state.news);

  return (
    <section className={styles.news}>
      <h2 className={styles.news__title}>
        <SkeletonBlock loading={loading} skeletonProps={{ width: 320 }}>
          Current news from the world of finance
        </SkeletonBlock>
      </h2>
      <p className={styles.news__description}>
        <SkeletonBlock loading={loading} skeletonProps={{ width: 320 }}>
          We update the news feed every 15 minutes. You can learn more by
          clicking on the news you are interested in.
        </SkeletonBlock>
      </p>

      <NewsSlider />
    </section>
  );
};
