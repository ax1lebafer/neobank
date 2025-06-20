import { ButtonHTMLAttributes, CSSProperties, ReactElement } from 'react';

type StyledElement = ReactElement<{ style?: CSSProperties }>;

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string | StyledElement;
  alt?: string;
  iconProps?: {
    rotate?: number;
  };
}
