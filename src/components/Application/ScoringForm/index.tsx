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
import { useAppDispatch } from '@/store/store';
import { IScoringPayload } from '@/store/actions/Loan/types';
import { sendScoringAsync } from '@/store/actions/Loan';
import { SCORING } from '@/constants/localStorageKeys';

export const ScoringForm = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const methods = useForm<IScoringFormValues>({
    defaultValues: SCORING_INITIAL_FORM_VALUES,
    mode: 'onChange',
    resolver: yupResolver(ScoringSchema),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: IScoringFormValues) => {
    console.log(data);

    const payload: IScoringPayload = {
      id: id!,
      ...data,
      dependentAmount: data.dependentAmount!,
      passportIssueDate: data.passportIssueDate!.toISOString(),
      employerINN: data.employerINN!,
      salary: data.salary!,
      workExperienceTotal: data.workExperienceTotal!,
      workExperienceCurrent: data.workExperienceCurrent!,
    };

    try {
      await dispatch(sendScoringAsync(payload));

      localStorage.setItem(SCORING, 'true');

      reset();
    } catch {
      localStorage.removeItem(SCORING);
    }
  };

  return (
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
  );
};
