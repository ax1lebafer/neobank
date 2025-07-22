import styles from './styles.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IScoringFormValues } from '@components/Application/ScoringForm/types';
import { Select } from '@components/shared/Select';
import {
  EMPLOYMENT_STATUS_OPTIONS,
  POSITION_OPTIONS,
} from '@components/Application/ScoringForm/constants';
import { TextField } from '@components/shared/TextField';

export const EmploymentData = () => {
  const {
    control,
    formState: { errors, dirtyFields },
  } = useFormContext<IScoringFormValues>();

  return (
    <div className={styles.employment}>
      <h3>Employment</h3>
      <div className={styles.employment__fields}>
        <Controller
          render={({ field }) => (
            <Select
              {...field}
              label="Your employment status"
              required
              options={EMPLOYMENT_STATUS_OPTIONS}
              error={!!errors.employmentStatus}
              helperText={errors.employmentStatus?.message}
            />
          )}
          name="employmentStatus"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value ?? ''}
              type="number"
              label="Your employer INN"
              placeholder="000000000000"
              inputProps={{ maxLength: 12 }}
              error={!!errors.employerINN}
              helperText={errors.employerINN?.message}
              isValid={dirtyFields.employerINN}
            />
          )}
          name="employerINN"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value ?? ''}
              type="number"
              label="Your salary"
              placeholder="For example 100 000"
              error={!!errors.salary}
              helperText={errors.salary?.message}
              isValid={dirtyFields.salary}
            />
          )}
          name="salary"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <Select
              {...field}
              label="Your position"
              required
              options={POSITION_OPTIONS}
              error={!!errors.position}
              helperText={errors.position?.message}
            />
          )}
          name="position"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value ?? ''}
              type="number"
              label="Your work experience total"
              placeholder="For example 10"
              error={!!errors.workExperienceTotal}
              helperText={errors.workExperienceTotal?.message}
              isValid={dirtyFields.workExperienceTotal}
            />
          )}
          name="workExperienceTotal"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value ?? ''}
              type="number"
              label="Your work experience current"
              placeholder="For example 2"
              error={!!errors.workExperienceCurrent}
              helperText={errors.workExperienceCurrent?.message}
              isValid={dirtyFields.workExperienceCurrent}
            />
          )}
          name="workExperienceCurrent"
          control={control}
        />
      </div>
    </div>
  );
};
