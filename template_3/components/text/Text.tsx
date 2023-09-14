import type { CSSProperties, FC, PropsWithChildren } from 'react';
import { memo } from 'react';
import cn from 'classnames';

import type { FontSize, FontStyle, FontWeight, TextAlign, TextColor, TextTransform } from './types';
import { fontSize, fontStyles, fontWeight, textAlign, textColor, textTransform } from './types';

import styles from './index.module.scss';

interface TextProps extends PropsWithChildren {
  disabled?: boolean;
  fontStyle?: FontStyle;
  weight?: FontWeight;
  size?: FontSize;
  color?: TextColor;
  align?: TextAlign;
  transform?: TextTransform;
  className?: string;
  style?: CSSProperties;
}

const Text: FC<TextProps> = ({
  className,
  fontStyle = 'normal',
  weight = 'normal',
  size = 'base',
  color = 'black',
  align = 'center',
  transform = 'normal',
  disabled = false,
  children,
  style,
}): JSX.Element => (
  <p
    style={style}
    className={cn(
      styles.text,
      fontStyles[fontStyle],
      fontWeight[weight],
      fontSize[size],
      textColor[color],
      textAlign[align],
      textTransform[transform],
      disabled && styles.disabled,
      className,
    )}
  >
    {children}
  </p>
);

export default memo(Text);
