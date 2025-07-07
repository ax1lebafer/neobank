import { ITabItem } from '@components/shared/Tabs/types';
import { AboutCard } from '@components/Loan/CardHighlights/AboutCard';
import { Rates } from '@components/Loan/CardHighlights/Rates';

export const CARD_TABS: ITabItem[] = [
  { id: 'about', label: 'About card', content: <AboutCard /> },
  { id: 'rates', label: 'Rates and conditions', content: <Rates /> },
  { id: 'cashback', label: 'Cashback', content: '3' },
  { id: 'faq', label: 'FAQ', content: '4' },
];
