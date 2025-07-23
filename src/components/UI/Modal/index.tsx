import { FC, useEffect } from 'react';
import { IModalProps } from '@components/UI/Modal/types';
import styles from './styles.module.scss';
import CloseIcon from '@/assets/icons/close.svg';

import ReactDOM from 'react-dom';
import { CustomButton } from '@components/UI/CustomButton';
import cn from 'classnames';

export const Modal: FC<IModalProps> = ({
  open,
  onClose,
  onSubmit,
  title,
  children,
  className,
  closeButtonLabel = 'Cancel',
  submitButtonLabel = 'Ok',
}) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div>
            <h4>{title}</h4>
          </div>
        )}

        <button className={styles.modal__close} onClick={onClose}>
          <img
            src={CloseIcon}
            className={styles.modal__icon}
            alt="Close icon"
          />
        </button>

        <div className={cn(styles.modal__content, className)}>{children}</div>

        <div className={styles.modal__footer}>
          <div className={styles.modal__buttonWrapper}>
            {onSubmit && (
              <CustomButton
                color="error"
                className={styles.modal__button}
                onClick={onSubmit}
              >
                {submitButtonLabel}
              </CustomButton>
            )}
            <CustomButton className={styles.modal__button} onClick={onClose}>
              {closeButtonLabel}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
