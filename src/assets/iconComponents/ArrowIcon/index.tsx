import { FC } from 'react';
import { IArrowIconProps } from '@assets/iconComponents/ArrowIcon/types';

export const ArrowIcon: FC<IArrowIconProps> = ({
  color = 'white',
  rotate = 0,
  style,
  size = 25,
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: 'center',
        ...style,
      }}
      {...rest}
    >
      <path
        d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0"
        stroke={color}
      />
    </svg>
  );
};
