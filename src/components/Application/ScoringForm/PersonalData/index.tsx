import styles from './styles.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IScoringFormValues } from '@components/Application/ScoringForm/types';
import { Select } from '@components/shared/Select';
import {
  DEPENDENTS_OPTIONS,
  GENDER_OPTIONS,
  MARITAL_STATUS,
} from '@components/Application/ScoringForm/constants';
import { TextField } from '@components/shared/TextField';

export const PersonalData = () => {
  const {
    control,
    formState: { errors, dirtyFields },
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
      <Controller
        render={({ field }) => (
          <Select
            label="Your number of dependents"
            required
            options={DEPENDENTS_OPTIONS}
            {...field}
            value={field.value ?? undefined}
            error={!!errors.dependentAmount}
            helperText={errors.dependentAmount?.message}
          />
        )}
        name="dependentAmount"
        control={control}
      />
      <Controller
        render={({ field }) => {
          const stringVal =
            field.value instanceof Date
              ? field.value.toISOString().slice(0, 10)
              : '';

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const dateString = e.target.value;
            const dateObj = dateString ? new Date(dateString) : null;
            field.onChange(dateObj);
          };

          return (
            <TextField
              {...field}
              value={stringVal}
              onChange={handleChange}
              type="date"
              placeholder="Select Date and Time"
              label="Date of issue of the passport"
              required
              error={!!errors.passportIssueDate}
              helperText={errors.passportIssueDate?.message}
              isValid={dirtyFields.passportIssueDate}
            />
          );
        }}
        name="passportIssueDate"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            placeholder="000000"
            label="Division code"
            required
            type="number"
            error={!!errors.passportIssueBranch}
            helperText={errors.passportIssueBranch?.message}
            isValid={dirtyFields.passportIssueBranch}
          />
        )}
        name="passportIssueBranch"
        control={control}
      />
    </div>
  );
};
