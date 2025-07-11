export interface IPrescoringFormValues {
  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  email: string;
  birthdate: Date | null;
  passportSeries: string;
  passportNumber: string;
}
