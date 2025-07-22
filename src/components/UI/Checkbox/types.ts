import { InputHTMLAttributes, ReactNode } from 'react';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}
