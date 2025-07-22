import { IPrescoringResponseDTO } from '@/types/loan';
import { IApplicationDTO } from '@/types/application';

export interface ILoanState {
  error: string | null;
  loading: boolean;
  offers: IPrescoringResponseDTO[] | null;
  isScoringSend: boolean;
  applicationById: IApplicationDTO | null;
}
