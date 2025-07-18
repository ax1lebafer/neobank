import styles from './styles.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IScoringFormValues } from '@components/Application/ScoringForm/types';
import { Select } from '@components/shared/Select';
import {
  GENDER_OPTIONS,
  MARITAL_STATUS,
} from '@components/Application/ScoringForm/constants';

export const PersonalData = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IScoringFormValues>();

  return (
    <div className={styles.personal}>
      <Controller
        render={({ field }) => (
          <Select
            label="What's your gender"
            required
            options={GENDER_OPTIONS}
            {...field}
            error={!!errors.gender}
            helperText={errors.gender?.message}
          />
        )}
        name="gender"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <Select
            label="Your marital status"
            required
            options={MARITAL_STATUS}
            {...field}
            error={!!errors.maritalStatus}
            helperText={errors.maritalStatus?.message}
          />
        )}
        name="maritalStatus"
        control={control}
      />
    </div>
  );
};
