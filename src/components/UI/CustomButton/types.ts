import { ButtonHTMLAttributes } from 'react';

export interface ICustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'error';
  className?: string;
}
