import { ButtonHTMLAttributes } from 'react';

export interface ICustomIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}
