import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { ICodeInputProps } from '@components/VerifyCode/CodeInput/types';
import styles from './styles.module.scss';

export const CodeInput: FC<ICodeInputProps> = ({ length = 4, onComplete }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<Array<HTMLInputElement | null>>(
    Array(length).fill(null)
  );
  const submittedRef = useRef(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const digit = e.target.value.replace(/[^0-9]/g, '').charAt(0);
    if (!digit) return;
    setValues((prev) => {
      const next = [...prev];
      next[idx] = digit;
      return next;
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key !== 'Backspace') return;

    e.preventDefault();

    setValues((prev) => {
      const next = [...prev];

      if (next[idx] !== '') {
        next[idx] = '';
      } else if (idx > 0) {
        next[idx - 1] = '';
      }

      return next;
    });
  };

  useEffect(() => {
    const firstEmpty = values.findIndex((v) => v === '');
    if (firstEmpty !== -1) {
      if (submittedRef.current) submittedRef.current = false;
      inputsRef.current[firstEmpty]?.focus();
    } else if (!submittedRef.current) {
      submittedRef.current = true;
      const codeStr = values.join('');
      const codeNum = parseInt(codeStr, 10);
      onComplete(codeNum);
    }
  }, [values, onComplete]);

  return (
    <div className={styles.codeWrapper}>
      {values.map((value, idx) => (
        <div className={styles.cellWrapper} key={idx}>
          <input
            type="text"
            maxLength={1}
            value={value}
            inputMode="numeric"
            placeholder=" "
            className={styles.cellWrapper__cell}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => {
              inputsRef.current[idx] = el;
            }}
          />
          <span className={styles.cellWrapper__round} />
        </div>
      ))}
    </div>
  );
};
