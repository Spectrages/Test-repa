import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { memo } from 'react';
import cn from 'classnames';
import Image from 'next/image';

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
  startIcon?: string;
  endIcon?: string;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  iconWidth?: number;
  iconHeight?: number;
}

const Button: FC<ButtonProps> = ({
  iconWidth = 16,
  iconHeight = 16,
  disabled = false,
  type = 'submit',
  palette = 'primary',
  size = 'fixed',
  radius = 'regular',
  height = 'regular',
  className,
  children,
  startIcon,
  endIcon,
  onClickHandler,
}) => (
  <button
    onClick={onClickHandler}
    type={type}
    disabled={disabled}
    className={cn(palettes[palette], sizes[size], rounding[radius], heights[height], className)}
  >
    {startIcon && (
      <Image
        src={startIcon}
        alt={startIcon}
        width={iconWidth}
        height={iconHeight}
        className={styles.imageMarginRight}
      />
    )}
    {children}
    {endIcon && (
      <Image
        src={endIcon}
        alt={endIcon}
        width={iconWidth}
        height={iconHeight}
        className={styles.imageMarginLeft}
      />
    )}
  </button>
);

export default memo(Button);
