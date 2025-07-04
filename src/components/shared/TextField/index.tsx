import { FC } from 'react';
import { ITextFieldProps } from '@components/shared/TextField/types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const TextField: FC<ITextFieldProps> = ({
  error,
  helperText,
  type,
  label,
  required,
  ...rest
}) => {
  const id = new Date().getMilliseconds();

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.inputWrapper__label} htmlFor={`input_${id}`}>
          {label}{' '}
          {required && <span className={styles.inputWrapper__required}>*</span>}
        </label>
      )}
      <input
        className={cn(
          styles.inputWrapper__input,
          error && styles.inputWrapper_borderError
        )}
        id={`input_${id}`}
        type={type}
        {...rest}
      />
      {error &&
        (helperText ? (
          <p className={styles.inputWrapper__error}>{helperText}</p>
        ) : null)}
    </div>
  );
};
