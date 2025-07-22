import { FC } from 'react';
import { ICheckboxProps } from '@components/UI/Checkbox/types';
import styles from './styles.module.scss';

export const Checkbox: FC<ICheckboxProps> = ({ label, id, ...rest }) => {
  const inputId = id ?? rest.name;

  return (
    <div className={styles.checkboxInner}>
      <label htmlFor={inputId} className={styles.checkboxInner__label}>
        <input
          type="checkbox"
          id={inputId}
          className={styles.checkboxInner__checkbox}
          {...rest}
        />
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};
