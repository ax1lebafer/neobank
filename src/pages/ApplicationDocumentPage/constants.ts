import { ITableColumns } from '@components/shared/Table/types';
import { IDocumentItem } from '@/pages/ApplicationDocumentPage/types';

export const DOCUMENT_COLUMNS: ITableColumns<IDocumentItem>[] = [
  {
    id: 'number',
    label: 'Number',
  },
  {
    id: 'date',
    label: 'Date',
  },
  {
    id: 'total_payment',
    label: 'Total payment',
  },
  {
    id: 'interest_payment',
    label: 'Interest payment',
  },
  {
    id: 'debt_payment',
    label: 'Debt payment',
  },
  {
    id: 'remaining_debt',
    label: 'Remaining debt',
  },
];

export const DOCUMENT_ITEMS: IDocumentItem[] = [
  {
    number: 'INV-001',
    date: '2025-07-01',
    total_payment: 1200,
    interest_payment: 200,
    debt_payment: 1000,
    remaining_debt: 5000,
  },
  {
    number: 'INV-002',
    date: '2025-07-10',
    total_payment: 800,
    interest_payment: 100,
    debt_payment: 700,
    remaining_debt: 4300,
  },
  {
    number: 'INV-003',
    date: '2025-07-15',
    total_payment: 1500,
    interest_payment: 250,
    debt_payment: 1250,
    remaining_debt: 3050,
  },
];
