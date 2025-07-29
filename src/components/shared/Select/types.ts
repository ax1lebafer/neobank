import { SelectHTMLAttributes } from 'react';

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
  className?: string;
  inputProps?: {
    className?: string;
  };
  options?: { label: string; value: number | string }[];
  placeholder?: string;
}

export interface ISelectOption {
  label: string;
  value: number | string;
}
