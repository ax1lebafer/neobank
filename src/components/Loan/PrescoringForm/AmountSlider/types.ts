import { InputHTMLAttributes } from 'react';

export interface IAmountSliderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
}
