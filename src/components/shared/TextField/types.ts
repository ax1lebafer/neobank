import { InputHTMLAttributes } from 'react';

export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
  className?: string;
  inputProps?: {
    className?: string;
  };
}
