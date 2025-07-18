export interface IScoringFormValues {
  gender: string;
  maritalStatus: string;
  dependentAmount: number | null;
  passportIssueDate: Date | null;
  passportIssueBranch: string;
  employmentStatus: string;
  employerINN: number | null;
  salary: number | null;
  position: string;
  workExperienceTotal: number | null;
  workExperienceCurrent: number | null;
}
