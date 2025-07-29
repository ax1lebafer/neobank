export interface ICreditData {
  amount: number;
  term: number;
  monthlyPayment: number;
  rate: number;
  psk: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  paymentSchedule: IPaymentScheduleData[];
}

export interface IPaymentScheduleData {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}
