import { useEffect, useState } from 'react';

import { dateFormat, getDaysInMonth, getMonthList } from '@/components/datePicker/constants/constants';
import { DatePickerProps, DatePickerType, MonthFormat } from '@/components/datePicker/constants/types';
import styles from '@/components/datePicker/datePicker.module.scss';

// TODO calendar hooks

export const useDatePickerValues = (props: DatePickerProps) => {
  const onDone = props.onDone ? props.onDone : () => {};
  const onClose = props.onClose ? props.onClose : () => {};
  const type: DatePickerType = props.type ? props.type : 'single';

  const containerClass = type === 'single' ? styles.calendarWrapper : styles.datePickerWrapper;

  const [date, setDate] = useState(props.currentDate);
  const [days, setDays] = useState<number[]>(
    getDaysInMonth(date.getMonth() + 1, date.getFullYear()),
  );

  const monthFormat: MonthFormat = type === 'single' ? 'long' : 'short';

  const monthsNames = getMonthList(props.language, monthFormat);
  const currentDay = date.getDate();
  const currentMonth = monthsNames[date.getMonth()] as string;
  const currentYear = date.getFullYear();
  const onDoneClick = () => {
    onDone(dateFormat(date));
    onClose();
  };
  const onCloseClick = () => {
    onClose();
  };
  const onDayChange = (day: number | string) => {
    setDate(new Date(currentYear, date.getMonth(), day as number));
  };
  const onMonthChange = (month: number | string) => {
    setDate(new Date(currentYear, monthsNames.indexOf(month as string), currentDay));
  };
  const onYearChange = (year: number | string) => {
    setDate(new Date(year as number, date.getMonth(), currentDay));
  };

  useEffect(() => {
    onDone(dateFormat(date));
  }, [date]);

  useEffect(() => {
    setDays(getDaysInMonth(date.getMonth() + 1, currentYear));
  }, [currentMonth, currentYear, date]);

  return {
    date,
    setDate,
    days,
    setDays,
    onDoneClick,
    onCloseClick,
    onDayChange,
    onMonthChange,
    onYearChange,
    currentDay,
    currentMonth,
    currentYear,
    monthsNames,
    containerClass,
    type,
  };
};
