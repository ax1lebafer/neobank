import { ITableColumns } from '@components/shared/Table/types';
import { IPaymentScheduleData } from '@/types/credit';

export const DOCUMENT_COLUMNS: ITableColumns<IPaymentScheduleData>[] = [
  {
    id: 'number',
    label: 'Number',
  },
  {
    id: 'date',
    label: 'Date',
  },
  {
    id: 'totalPayment',
    label: 'Total payment',
  },
  {
    id: 'interestPayment',
    label: 'Interest payment',
  },
  {
    id: 'debtPayment',
    label: 'Debt payment',
  },
  {
    id: 'remainingDebt',
    label: 'Remaining debt',
  },
];
