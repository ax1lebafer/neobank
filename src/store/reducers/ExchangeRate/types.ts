import { IResponseRateDTO } from '@/types/exchangeRateTypes';

export interface IExchangeRateState {
  loading: boolean;
  error: string | null;
  rate: IResponseRateDTO | null;
}
