import { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { ICustomIconButtonProps } from '@components/UI/CustomIconButton/types';

export const CustomIconButton: FC<ICustomIconButtonProps> = ({
  children,
  className = '',
  icon,
  ...rest
}) => {
  return (
    <button className={cn(styles.button, className)} {...rest}>
      <img src={icon} alt="Button icon" className={styles.button__icon} />{' '}
      {children}
    </button>
  );
};
