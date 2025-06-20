import { IIconButtonProps } from '@components/UI/IconButton/types';
import { cloneElement, CSSProperties, FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export const IconButton: FC<IIconButtonProps> = ({
  icon,
  alt = 'Button icon',
  className,
  iconProps,
  ...rest
}) => {
  const rotate = iconProps?.rotate ?? 0;
  const transformStyle: CSSProperties = {
    transform: `rotate(${rotate}deg)`,
    transformOrigin: 'center',
  };

  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <img src={icon} alt={alt} style={transformStyle} />;
    }
    return cloneElement(icon, {
      style: { ...(icon.props.style ?? {}), ...transformStyle },
    });
  };

  return (
    <button
      type="button"
      className={cn(styles.iconButton, className)}
      {...rest}
    >
      {renderIcon()}
    </button>
  );
};
