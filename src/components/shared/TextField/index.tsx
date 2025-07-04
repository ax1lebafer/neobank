import { FC } from 'react';
import { ITextFieldProps } from '@components/shared/TextField/types';
import styles from './styles.module.scss';
import cn from 'classnames';
import ValidIcon from '@/assets/icons/valid.svg';

export const TextField: FC<ITextFieldProps> = ({
  error,
  helperText,
  type,
  label,
  required,
  className,
  inputProps,
  ...rest
}) => {
  const id = new Date().getMilliseconds();

  return (
    <div className={cn(styles.inputWrapper, className)}>
      {label && (
        <label className={styles.inputWrapper__label} htmlFor={`input_${id}`}>
          {label}{' '}
          {required && <span className={styles.inputWrapper__required}>*</span>}
        </label>
      )}

      <input
        className={cn(
          styles.inputWrapper__input,
          error && styles.inputWrapper_borderError,
          inputProps?.className
        )}
        id={`input_${id}`}
        type={type}
        {...rest}
      />

      {error &&
        (helperText ? (
          <p className={styles.inputWrapper__error}>{helperText}</p>
        ) : null)}

      <img
        src={ValidIcon}
        alt="Valid icon"
        className={styles.inputWrapper__icon}
      />
    </div>
  );
};
