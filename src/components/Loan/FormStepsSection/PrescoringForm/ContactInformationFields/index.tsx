import styles from './styles.module.scss';
import { TextField } from '@components/shared/TextField';
import { Select } from '@components/shared/Select';
import { TERM_OPTIONS } from '@components/Loan/FormStepsSection/PrescoringForm/constants';
import { FC } from 'react';
import { IContactInformationFieldsProps } from '@components/Loan/FormStepsSection/PrescoringForm/ContactInformationFields/types';
import { Controller } from 'react-hook-form';

export const ContactInformationFields: FC<IContactInformationFieldsProps> = ({
  control,
  errors,
  dirtyFields,
}) => {
  return (
    <div className={styles.fields}>
      <h3 className={styles.fields__title}>Contact Information</h3>
      <div className={styles.fields__form}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Your last name"
              placeholder="For exapmle Doe"
              required
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              isValid={dirtyFields.lastName}
            />
          )}
          name="lastName"
          control={control}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Your first name"
              required
              placeholder="For exapmle Jhon"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              isValid={dirtyFields.firstName}
            />
          )}
          name="firstName"
          control={control}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value ?? ''}
              label="Your patronymic"
              placeholder="For Example Victorovich"
            />
          )}
          control={control}
          name="middleName"
          defaultValue=""
        />

        <Controller
          render={({ field }) => (
            <Select
              {...field}
              label="Select term"
              required
              options={TERM_OPTIONS}
            />
          )}
          name="term"
          control={control}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Your email"
              type="email"
              required
              placeholder="test@gmail.com"
              error={!!errors.email}
              helperText={errors.email?.message}
              isValid={dirtyFields.email}
            />
          )}
          name="email"
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
                label="Your date of birth"
                type="date"
                required
                placeholder="Select Date and Time"
                value={stringVal}
                onChange={handleChange}
                name={field.name}
                onBlur={field.onBlur}
                error={!!errors.birthdate}
                helperText={errors.birthdate?.message}
                isValid={dirtyFields.birthdate}
              />
            );
          }}
          name="birthdate"
          control={control}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Your passport series"
              required
              placeholder="0000"
              type="number"
              error={!!errors.passportSeries}
              helperText={errors.passportSeries?.message}
              isValid={dirtyFields.passportSeries}
            />
          )}
          name="passportSeries"
          control={control}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Your passport number"
              required
              type="number"
              placeholder="000000"
              error={!!errors.passportNumber}
              helperText={errors.passportNumber?.message}
              isValid={dirtyFields.passportNumber}
            />
          )}
          name="passportNumber"
          control={control}
        />
      </div>
    </div>
  );
};
