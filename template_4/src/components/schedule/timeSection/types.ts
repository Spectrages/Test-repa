import styles from "./timeSection.module.scss";

export type HourType = "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";

export const startHour: Record<HourType , string> = {
  '07': `${styles.start_hour_seven}`,
  '08': `${styles.start_hour_eight}`,
  '09': `${styles.start_hour_nine}`,
  10: `${styles.start_hour_ten}`,
  11: `${styles.start_hour_eleven}`,
  12: `${styles.start_hour_twelve}`,
  13: `${styles.start_hour_thirteen}`,
  14: `${styles.start_hour_fourteen}`,
  15: `${styles.start_hour_fifteen}`,
  16: `${styles.start_hour_sixteen}`,
  17: `${styles.start_hour_seventeen}`,
  18: `${styles.start_hour_eighteen}`,
  19: `${styles.start_hour_nineteen}`,
  20: `${styles.start_hour_twenty}`,
};

export const endHour: Record<HourType , string> = {
  '07': `${styles.end_hour_seven}`,
  '08': `${styles.end_hour_eight}`,
  '09': `${styles.end_hour_nine}`,
  10: `${styles.end_hour_ten}`,
  11: `${styles.end_hour_eleven}`,
  12: `${styles.end_hour_twelve}`,
  13: `${styles.end_hour_thirteen}`,
  14: `${styles.end_hour_fourteen}`,
  15: `${styles.end_hour_fifteen}`,
  16: `${styles.end_hour_sixteen}`,
  17: `${styles.end_hour_seventeen}`,
  18: `${styles.end_hour_eighteen}`,
  19: `${styles.end_hour_nineteen}`,
  20: `${styles.end_hour_twenty}`,
};