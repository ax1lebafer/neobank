import { ReactNode } from 'react';

export interface ITooltipProps {
  title: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}
