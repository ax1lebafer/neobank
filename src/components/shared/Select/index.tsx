import { FC } from 'react';
import { ISelectProps } from '@components/shared/Select/types';
import styles from './styles.module.scss';

export const Select: FC<ISelectProps> = ({
  error,
  helperText,
  className,
  inputProps,
  label,
  options = [],
  ...rest
}) => {
  const id = new Date().getMilliseconds();

  return (
    <div className={styles.selectWrapper}>
      <select {...rest}>
        {options ? (
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))
        ) : (
          <option value="">No data</option>
        )}
      </select>
    </div>
  );
};
