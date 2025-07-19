import { IClientDTO } from '@/types/client';

export interface IApplicationDTO {
  id: number;
  client: IClientDTO;
  credit: string | null;
  status: string;
  creationDate: string;
  signDate: string | null;
  sesCode: number | null;
  statusHistory: IApplicationStatus[];
}

interface IApplicationStatus {
  status: string;
  time: string;
  changeType: string;
}

export enum EApplicationStatus {
  PREAPPROVAL = 'PREAPPROVAL',
  APPROVED = 'APPROVED',
  CC_DENIED = 'CC_DENIED',
}
