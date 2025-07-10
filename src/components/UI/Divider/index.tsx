import { CSSProperties, FC } from 'react';
import { IDividerProps } from '@components/UI/Divider/types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Divider: FC<IDividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  color = '#80808066',
  thickness = '1px',
  length = '100%',
  className,
}) => {
  const style: CSSProperties = {
    backgroundColor: variant === 'solid' ? color : 'transparent',
    // borderStyle: variant,
    // borderColor: color,
    borderWidth:
      variant === 'solid'
        ? undefined
        : orientation === 'horizontal'
          ? `0 0 ${thickness} 0`
          : `0 0 0 ${thickness}`,
    width: orientation === 'horizontal' ? length : thickness,
    height: orientation === 'horizontal' ? thickness : length,
  };

  const classNames = cn(
    styles.divider,
    styles[orientation],
    styles[variant],
    className
  );

  return <div className={classNames} style={style} />;
};
