import { ReactNode } from 'react';

export interface ITabsProps {
  tabs: ITabItem[];
  defaultIndex?: number;
  onChange?: (newIdx: number) => void;
}

export interface ITabItem {
  id: string;
  label: string;
  content: ReactNode;
}
