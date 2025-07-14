import { ITabItem } from '@components/shared/Tabs/types';
import { AboutCard } from '@components/Loan/CardHighlights/AboutCard';
import { Rates } from '@components/Loan/CardHighlights/Rates';
import { Cashback } from '@components/Loan/CardHighlights/Cashback';
import { FaqCard } from '@components/Loan/CardHighlights/FaqCard';

export const CARD_TABS: ITabItem[] = [
  { id: 'about', label: 'About card', content: <AboutCard /> },
  { id: 'rates', label: 'Rates and conditions', content: <Rates /> },
  { id: 'cashback', label: 'Cashback', content: <Cashback /> },
  { id: 'faq', label: 'FAQ', content: <FaqCard /> },
];
