import styles from "./index.module.scss";

export type FontStyle = "italic" | "normal";

export const fontStyles: Record<FontStyle, string> = {
  italic: `${styles.fontStyleItalic}`,
  normal: `${styles.fontStyleNormal}`,
};

export type FontWeight = "normal" | "medium" | "bold";

export const fontWeight: Record<FontWeight, string> = {
  normal: `${styles.fontWeightNormal}`,
  medium: `${styles.fontWeightMedium}`,
  bold: `${styles.fontWeightBold}`,
};

export type FontSize = "xxs" | "xs" | "sm" | "base" | "lg" | "xl" | "xxl" | "xxxl";

export const fontSize: Record<FontSize, string> = {
  xxs: `${styles.fontSize_xxs}`,
  xs: `${styles.fontSize_xs}`,
  sm: `${styles.fontSize_sm}`,
  base: `${styles.fontSize_base}`,
  lg: `${styles.fontSize_lg}`,
  xl: `${styles.fontSize_xl}`,
  xxl: `${styles.fontSize_xxl}`,
  xxxl: `${styles.fontSize_xxxl}`,
};

export type TextColor =
  | "white"
  | "black"
  | "gray_dark"
  | "gray_light"
  | "blue_dark"
  | "pink_dark"
  | "pink_light"
  | "green"
  | "orange"
  | "red";

export const textColor: Record<TextColor, string> = {
  white: `${styles.textColor_white}`,
  black: `${styles.textColor_black}`,
  gray_dark: `${styles.textColor_gray_dark}`,
  gray_light: `${styles.textColor_gray_light}`,
  blue_dark: `${styles.textColor_blue_dark}`,
  pink_dark: `${styles.textColor_pink_dark}`,
  pink_light: `${styles.textColor_pink_light}`,
  green: `${styles.textColor_green}`,
  orange: `${styles.textColor_orange}`,
  red: `${styles.textColor_red}`,
};

export type TextAlign = "left" | "center" | "right";

export const textAlign: Record<TextAlign, string> = {
  left: `${styles.textAlign_left}`,
  center: `${styles.textAlign_center}`,
  right: `${styles.textAlign_right}`,
};

export type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal";

export const textTransform: Record<TextTransform, string> = {
  uppercase: `${styles.textTransform_uppercase}`,
  lowercase: `${styles.textTransform_lowercase}`,
  capitalize: `${styles.textTransform_capitalize}`,
  normal: `${styles.textTransform_normal}`,
};
