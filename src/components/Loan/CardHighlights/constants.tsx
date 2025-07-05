import { ITabItem } from '@components/shared/Tabs/types';
import { AboutCard } from '@components/Loan/CardHighlights/AboutCard';

export const CARD_TABS: ITabItem[] = [
  { id: 'about', label: 'About card', content: <AboutCard /> },
  { id: 'rates', label: 'Rates and conditions', content: '2' },
  { id: 'cashback', label: 'Cashback', content: '3' },
  { id: 'faq', label: 'FAQ', content: '4' },
];
