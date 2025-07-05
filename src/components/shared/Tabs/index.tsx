import styles from './styles.module.scss';
import { FC, useState } from 'react';
import { ITabsProps } from '@components/shared/Tabs/types';

export const Tabs: FC<ITabsProps> = ({ tabs, defaultIndex = 0, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleChangeTab = (idx: number) => {
    setActiveIndex(idx);
    onChange?.(idx);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__list}></div>
    </div>
  );
};
