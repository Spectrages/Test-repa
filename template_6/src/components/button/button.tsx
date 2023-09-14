import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { memo } from 'react';
import cn from 'classnames';

import type { Height, Palette, Radius, Size, Type } from './types';
import { heights, palettes, rounding, sizes } from './types';

import styles from './index.module.scss';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type?: Type;
  palette?: Palette;
  size?: Size;
  radius?: Radius;
  height?: Height;
  className?: string;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  disabled = false,
  type = 'submit',
  palette = 'primary',
  size = 'fixed',
  radius = 'regular',
  height = 'regular',
  className,
  children,
  onClickHandler,
}) => (
  <button
    onClick={onClickHandler}
    type={type}
    disabled={disabled}
    className={cn(palettes[palette], sizes[size], rounding[radius], heights[height], styles.button, className)}
  >
    {children}
  </button>
);

export default memo(Button);
