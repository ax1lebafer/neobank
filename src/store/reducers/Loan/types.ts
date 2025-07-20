import { IPrescoringResponseDTO } from '@/types/loan';

export interface ILoanState {
  error: string | null;
  loading: boolean;
  offers: IPrescoringResponseDTO[] | null;
  isScoringSend: boolean;
}
