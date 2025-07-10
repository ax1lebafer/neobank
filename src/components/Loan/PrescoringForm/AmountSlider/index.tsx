import styles from './styles.module.scss';
import { FC } from 'react';
import { IAmountSliderProps } from '@components/Loan/PrescoringForm/AmountSlider/types';

export const AmountSlider: FC<IAmountSliderProps> = ({ value }) => {
  const MIN = 150000;
  const MAX = 600000;
  const STEP = 1000;

  return (
    <div className={styles.slider}>
      <p className={styles.slider__title}>Select amount</p>

      <div className={styles.slider__wrapper}>
        <label className={styles.slider__label} htmlFor="amount_slider">
          {value}
        </label>
        <input
          className={styles.slider__range}
          id="amount_slider"
          value={value}
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
        />
        <div className={styles.slider__limits}>
          <p>150 000</p>
          <p>600 000</p>
        </div>
      </div>
    </div>
  );
};
