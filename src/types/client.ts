import { IEmploymentData } from '@/types/employment';

export interface IClientDTO {
  firstName: string;
  lastName: string;
  middleName: string | null;
  email: string;
  gender: string | null;
  birthdate: string;
  passportSeries: string;
  passportNumber: string;
  passportIssueDate: string | null;
  passportIssueBranch: string | null;
  maritalStatus: string | null;
  dependentAmount: number | null;
  employment: IEmploymentData | null;
  account: number | null;
}
