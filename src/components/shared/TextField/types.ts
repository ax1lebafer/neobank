import { InputHTMLAttributes, ReactNode } from 'react';

export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
  className?: string;
  inputProps?: {
    className?: string;
    endAdornment?: ReactNode;
    maxLength?: number;
    inputMode?:
      | 'email'
      | 'search'
      | 'tel'
      | 'text'
      | 'url'
      | 'numeric'
      | 'none'
      | 'decimal';
  };
  variant?: 'outlined' | 'underline';
  isValid?: boolean;
}
