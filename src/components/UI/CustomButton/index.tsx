import { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { ICustomButtonProps } from '@components/UI/CustomButton/types';

export const CustomButton: FC<ICustomButtonProps> = ({
  children,
  type = 'button',
  className = '',
  color = 'primary',
  ...rest
}) => {
  return (
    <button
      className={cn(
        styles.button,
        color === 'primary' && styles.button__primary,
        color === 'error' && styles.button__error,
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
