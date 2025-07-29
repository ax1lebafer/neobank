import styles from './styles.module.scss';
import CloseIcon from '@/assets/icons/close.svg';
import { useAppDispatch, useAppSelector } from '@/store/store';
import cn from 'classnames';
import { clearNotification } from '@/store/reducers/Notification';
import { useCallback, useEffect, useState } from 'react';

export const Notification = () => {
  const dispatch = useAppDispatch();

  const { message, severity } = useAppSelector((state) => state.notification);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleClear = useCallback(() => {
    dispatch(clearNotification());
  }, [dispatch]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const onTransitionEnd = () => {
    if (!isVisible) {
      handleClear();
    }
  };

  if (!message) {
    return null;
  }

  return (
    <div
      className={cn(
        styles.notification,
        styles[severity as 'error' | 'success'],
        isVisible ? styles.show : styles.hide
      )}
      onTransitionEnd={onTransitionEnd}
    >
      <img src={CloseIcon} alt="Close icon" onClick={handleClose} />
      <p className={styles.notification__text}>{message}</p>
    </div>
  );
};
