import { FC, useId } from 'react';
import { ICheckboxProps } from '@components/UI/Checkbox/types';
import styles from './styles.module.scss';

export const Checkbox: FC<ICheckboxProps> = ({
  label,
  id,
  checked,
  onChange,
  ...rest
}) => {
  const generatedId = useId();

  const inputId = id ?? rest.name ?? generatedId;

  return (
    <div className={styles.checkboxInner}>
      <label
        htmlFor={`checkbox_${inputId}`}
        className={styles.checkboxInner__label}
      >
        <input
          type="checkbox"
          id={`checkbox_${inputId}`}
          className={styles.checkboxInner__checkbox}
          checked={checked}
          onChange={onChange}
          {...rest}
        />
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};
