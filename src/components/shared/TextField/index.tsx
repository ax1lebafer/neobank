import { FC, useId, useRef } from 'react';
import { ITextFieldProps } from '@components/shared/TextField/types';
import styles from './styles.module.scss';
import cn from 'classnames';
import ValidIcon from '@/assets/icons/valid.svg';
import InvalidIcon from '@/assets/icons/error.svg';

export const TextField: FC<ITextFieldProps> = ({
  error,
  helperText,
  type,
  label,
  required,
  className,
  inputProps,
  variant = 'outlined',
  isValid = false,
  ...rest
}) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const textLength = String(rest.value ?? '').length;
  const GAP = '0.5ch';

  const handleOpenDatePicker = () => {
    if (type === 'date' && inputRef.current?.showPicker) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className={cn(styles.inputWrapper, className)}>
      {label && (
        <label className={styles.inputWrapper__label} htmlFor={`input_${id}`}>
          {label}{' '}
          {required && <span className={styles.inputWrapper__required}>*</span>}
        </label>
      )}

      <div className={styles.inputWrapper__inner}>
        <input
          onClick={handleOpenDatePicker}
          ref={inputRef}
          className={cn(
            variant === 'outlined' && styles.inputWrapper__input,
            variant === 'underline' && styles.inputWrapper__inputUnderline,
            error && variant === 'outlined' && styles.inputWrapper_borderError,
            error &&
              variant === 'underline' &&
              styles.inputWrapper__borderErrorUndeline,
            inputProps?.className
          )}
          id={`input_${id}`}
          type={type}
          {...rest}
        />

        {inputProps?.endAdornment && (
          <div
            className={styles.inputWrapper__adornment}
            style={{
              left: `calc(${textLength}ch + ${GAP})`,
            }}
          >
            {inputProps.endAdornment}
          </div>
        )}

        {error ? (
          <img
            src={InvalidIcon}
            alt="Invalid icon"
            className={styles.inputWrapper__icon}
          />
        ) : isValid ? (
          <img
            src={ValidIcon}
            alt="Valid icon"
            className={styles.inputWrapper__icon}
          />
        ) : null}
      </div>

      {error &&
        (helperText ? (
          <p className={styles.inputWrapper__error}>{helperText}</p>
        ) : null)}
    </div>
  );
};
