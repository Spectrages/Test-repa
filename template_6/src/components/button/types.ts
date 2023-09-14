import styles from './index.module.scss';

export type Palette = 'primary' | 'secondary';

export const palettes: Record<Palette, string> = {
  primary: `${styles.palettesPrimary}`,
  secondary: `${styles.palettesSecondary}`,
};

export type Size = 'fixed' | 'fill';

export const sizes: Record<Size, string> = {
  fixed: `${styles.sizesFixed}`,
  fill: `${styles.sizesFill}`,
};

export type Radius = 'regular' | 'large';

export const rounding: Record<Radius, string> = {
  regular: `${styles.roundingRegular}`,
  large: `${styles.roundingLarge}`,
};

export type Height = 'small' | 'regular' | 'large';

export const heights: Record<Height, string> = {
  small: `${styles.heightsSmall}`,
  regular: `${styles.heightsRegular}`,
  large: `${styles.heightLarge}`,
};

export type Type = 'button' | 'submit' | 'reset';

export type FontStyle = 'italic' | 'normal';

export const fontStyles: Record<FontStyle, string> = {
  italic: `${styles.fontStyleItalic}`,
  normal: `${styles.fontStyleNormal}`,
};

export type FontWeight = 'normal' | 'bold';

export const fontWeights: Record<FontWeight, string> = {
  normal: `${styles.fontWeightNormal}`,
  bold: `${styles.fontWeightBold}`,
};

export type FontSize = 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export const fontSizes: Record<FontSize, string> = {
  xxs: `${styles.fontSize_xxs}`,
  xs: `${styles.fontSize_xs}`,
  sm: `${styles.fontSize_sm}`,
  base: `${styles.fontSize_base}`,
  lg: `${styles.fontSize_lg}`,
  xl: `${styles.fontSize_xl}`,
};

export type TextColor = 'white' | 'black' | 'gray_dark' | 'blue_dark' | 'green_dark';

export const textColors: Record<TextColor, string> = {
  white: `${styles.textColor_white}`,
  black: `${styles.textColor_black}`,
  gray_dark: `${styles.textColor_gray_dark}`,
  blue_dark: `${styles.textColor_blue_dark}`,
  green_dark: `${styles.textColor_green_dark}`,
};

export type TextAlign = 'left' | 'center' | 'right';

export const textAligns: Record<TextAlign, string> = {
  left: `${styles.textAlign_left}`,
  center: `${styles.textAlign_center}`,
  right: `${styles.textAlign_right}`,
};

export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal';

export const textTransforms: Record<TextTransform, string> = {
  uppercase: `${styles.textTransform_uppercase}`,
  lowercase: `${styles.textTransform_lowercase}`,
  capitalize: `${styles.textTransform_capitalize}`,
  normal: `${styles.textTransform_normal}`,
};
