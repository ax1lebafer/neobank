import { ReactNode } from 'react';

export interface IModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  closeButtonLabel?: string;
  submitButtonLabel?: string;
}
