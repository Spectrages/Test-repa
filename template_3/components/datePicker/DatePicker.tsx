import type { FC } from 'react';
import { memo } from 'react';
import Image from 'next/image';

import pointer from '@/public/icons/Pointer.svg';
import { DatePickerProps } from '@/components/datePicker/constants/types';
import { useDatePickerValues } from '@/components/datePicker/utils/useDatePickerValues';

import { YEARS } from './constants/constants';
import SwiperPicker from './Swiper/Swiper';

import styles from './datePicker.module.scss';

const DatePicker: FC<DatePickerProps> = memo((props) => {
  const {
    days,
    onDayChange,
    onMonthChange,
    onYearChange,
    currentDay,
    currentMonth,
    currentYear,
    monthsNames,
    containerClass,
  } = useDatePickerValues(props);

  return (
    <div className={containerClass}>
      <Image src={pointer} alt="pointer" className={styles.pointer} />
      <div className={styles.caption}>{`${currentMonth} ${currentYear}`}</div>
      <div className={styles.dateSelector}>
        <SwiperPicker onChange={onDayChange} data={days} current={currentDay} paddingLeft />
        <SwiperPicker onChange={onMonthChange} data={monthsNames} current={currentMonth} />
        <SwiperPicker onChange={onYearChange} data={YEARS} current={currentYear} paddingRight />
      </div>
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

export { DatePicker };
