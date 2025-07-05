import { FC, useId } from 'react';
import { ISelectProps } from '@components/shared/Select/types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Select: FC<ISelectProps> = ({
  error,
  helperText,
  className,
  inputProps,
  label,
  options = [],
  required,
  ...rest
}) => {
  const id = useId();

  return (
    <div className={cn(styles.selectWrapper, className)}>
      {label && (
        <label className={styles.selectWrapper__label} htmlFor={`select_${id}`}>
          {label}{' '}
          {required && (
            <span className={styles.selectWrapper__required}>*</span>
          )}
        </label>
      )}
      <select
        {...rest}
        id={`select_${id}`}
        className={cn(
          styles.selectWrapper__select,
          error && styles.selectWrapper_borderError,
          inputProps?.className
        )}
      >
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No data
          </option>
        )}
      </select>

      {error &&
        (helperText ? (
          <p className={styles.selectWrapper__error}>{helperText}</p>
        ) : null)}
    </div>
  );
};
