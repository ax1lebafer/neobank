import styles from './styles.module.scss';
import { FC, useState } from 'react';
import { ITabsProps } from '@components/shared/Tabs/types';
import cn from 'classnames';

export const Tabs: FC<ITabsProps> = ({ tabs, defaultIndex = 0, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleChangeTab = (idx: number) => {
    setActiveIndex(idx);
    onChange?.(idx);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__list} role="tablist">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            role="tab"
            onClick={() => handleChangeTab(idx)}
            className={cn(
              styles.tabs__button,
              activeIndex === idx && styles.tabs__active
            )}
          >
            {tab.label}
          </button>
        ))}
        <span className={styles.tabs__line}></span>
      </div>

      {tabs.map((tab, idx) => (
        <div
          key={tab.id}
          role="tabpanel"
          hidden={activeIndex !== idx}
          className={styles.tabs__panel}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
