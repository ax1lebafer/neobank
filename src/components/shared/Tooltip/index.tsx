import { FC } from 'react';
import { ITooltipProps } from '@components/shared/Tooltip/types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Tooltip: FC<ITooltipProps> = ({
  title,
  children,
  position = 'bottom',
}) => {
  return (
    <div
      className={cn(styles.tooltip, {
        [styles.top]: position === 'top',
        [styles.bottom]: position === 'bottom',
        [styles.left]: position === 'left',
        [styles.right]: position === 'right',
      })}
    >
      {children}
      <span className={styles.tooltip__text}>{title}</span>
    </div>
  );
};
