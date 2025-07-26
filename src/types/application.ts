import { IClientDTO } from '@/types/client';
import { ICreditData } from '@/types/credit';

export interface IApplicationDTO {
  id: number;
  client: IClientDTO;
  credit: ICreditData | null;
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
  CC_APPROVED = 'CC_APPROVED',
  PREPARE_DOCUMENTS = 'PREPARE_DOCUMENTS',
  DOCUMENT_CREATED = 'DOCUMENT_CREATED',
}
