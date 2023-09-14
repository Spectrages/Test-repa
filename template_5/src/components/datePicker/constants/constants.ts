import { MonthFormat } from '@/components/datePicker/constants/types';

export const getDaysInMonth = (month: number, year: number): number[] => {
  const daysAmount = new Date(year, month, 0).getDate();
  return Array.from({ length: daysAmount }, (_el: number, index: number) => index + 1);
};

export const getMonthList = (
  locales: string | string[] = ["en", "he"],
  format: MonthFormat = 'long',
): string[] => {
  const year = new Date().getFullYear();
  const monthList: IterableIterator<number> = Array(12).keys();
  const formatter = new Intl.DateTimeFormat(locales, {
    month: format,
  });
  const getMonthName = (monthIndex: number) => formatter.format(new Date(year, monthIndex));
  return Array.from(monthList, getMonthName);
};

export const YEARS = Array.from(
  { length: 100 }, (_el: number, index) => new Date().getFullYear() - index,
);

export const dateFormat = (time: Date) => {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const monthResult = month < 10 ? `0${month}` : month;
  const dayResult = day < 10 ? `0${day}` : day;
  return `${year}-${monthResult}-${dayResult}`;
};
