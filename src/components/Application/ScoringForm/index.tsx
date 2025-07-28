import styles from './styles.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { SCORING_INITIAL_FORM_VALUES } from '@components/Application/ScoringForm/constants';
import { IScoringFormValues } from '@components/Application/ScoringForm/types';
import { PersonalData } from '@components/Application/ScoringForm/PersonalData';
import { yupResolver } from '@hookform/resolvers/yup';
import { ScoringSchema } from '@components/Application/ScoringForm/schema';
import { CustomButton } from '@components/UI/CustomButton';
import { EmploymentData } from '@components/Application/ScoringForm/EmploymentData';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { IScoringPayload } from '@/store/actions/Loan/types';
import { sendScoringAsync } from '@/store/actions/Loan';
import { SCORING, STEP } from '@/constants/localStorageKeys';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';
import { setStep } from '@/store/reducers/Loan';

export const ScoringForm = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.loan);

  const methods = useForm<IScoringFormValues>({
    defaultValues: SCORING_INITIAL_FORM_VALUES,
    mode: 'onChange',
    resolver: yupResolver(ScoringSchema),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: IScoringFormValues) => {
    const payload: IScoringPayload = {
      id: id!,
      gender: data.gender,
      maritalStatus: data.maritalStatus,
      dependentAmount: data.dependentAmount!,
      passportIssueDate: data.passportIssueDate!.toISOString(),
      passportIssueBranch: data.passportIssueBranch,
      employment: {
        employmentStatus: data.employmentStatus,
        employerINN: String(data.employerINN),
        salary: data.salary!,
        position: data.position,
        workExperienceTotal: data.workExperienceTotal!,
        workExperienceCurrent: data.workExperienceCurrent!,
      },
    };

    try {
      await dispatch(sendScoringAsync(payload)).unwrap();

      localStorage.setItem(SCORING, 'true');
      localStorage.setItem(STEP, '3');
      dispatch(setStep(3));

      reset();
    } catch {
      localStorage.removeItem(SCORING);
    }
  };

  return (
    <SkeletonBlock
      loading={loading}
      skeletonProps={{ height: 600, borderRadius: 28 }}
    >
      <FormProvider {...methods}>
        <form className={styles.scoring} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.scoring__titleWrapper}>
            <h2>Continuation of the application</h2>
            <p>Step 2 of 5</p>
          </div>

          <PersonalData />

          <EmploymentData />

          <CustomButton className={styles.scoring__button} type="submit">
            Continue
          </CustomButton>
        </form>
      </FormProvider>
    </SkeletonBlock>
  );
};
