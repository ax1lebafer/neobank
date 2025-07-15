import { IPrescoringResponseDTO } from '@/types/loan';

export interface ILoanOfferCardProps {
  offer: IPrescoringResponseDTO;
  onAccept: (value: IPrescoringResponseDTO) => void;
}
