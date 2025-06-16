import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

export const CustomButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <button className={cn(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
