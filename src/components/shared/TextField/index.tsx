import { FC, useId, useRef } from 'react';
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
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);

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
            styles.inputWrapper__input,
            error && styles.inputWrapper_borderError,
            inputProps?.className
          )}
          id={`input_${id}`}
          type={type}
          {...rest}
        />

        <img
          src={ValidIcon}
          alt="Valid icon"
          className={styles.inputWrapper__icon}
        />
      </div>

      {error &&
        (helperText ? (
          <p className={styles.inputWrapper__error}>{helperText}</p>
        ) : null)}
    </div>
  );
};
