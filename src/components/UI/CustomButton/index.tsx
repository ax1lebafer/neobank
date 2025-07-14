import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

export const CustomButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type = 'button',
  className = '',
  ...rest
}) => {
  return (
    <button className={cn(styles.button, className)} type={type} {...rest}>
      {children}
    </button>
  );
};
