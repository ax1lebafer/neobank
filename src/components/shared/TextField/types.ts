import { InputHTMLAttributes, ReactNode } from 'react';

export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
  className?: string;
  inputProps?: {
    className?: string;
    endAdornment?: ReactNode;
  };
  variant?: 'outlined' | 'underline';
  isValid?: boolean;
}
