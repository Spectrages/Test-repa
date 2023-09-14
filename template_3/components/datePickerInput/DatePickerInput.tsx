import React, { FC, memo, useState, forwardRef, ForwardedRef } from 'react';
import { Popover } from '@headlessui/react';
import cn from 'classnames';
import Image from 'next/image';
import calendar from '@/public/icons/Calendar.svg';
import { DatePicker } from '@/components/datePicker';
import { dateFormat } from '@/components/datePicker/constants/constants';

import styles from './datePickerInput.module.scss';

interface DatePickerInputProps {
  value?: string;
  id?: string;
  onChange?: (inputValue: string) => void;
  caption?: string;
  language?: string;
  onChangeForm?: (fieldName: string, value: string) => void;
}

const DatePickerInput: FC<DatePickerInputProps> = forwardRef(
  ({ value, id = '', onChange = () => {}, language = 'en', onChangeForm }, ref: ForwardedRef<HTMLInputElement>) => {
    const [date, setDate] = useState(value);

    const onChangeInput = (inputValue: string) => {
      if (onChangeForm) {
        onChangeForm('dateOfBirth', inputValue);
      }
      if (inputValue) {
        setDate(inputValue);
        onChange(inputValue);
      }
    };

    const swiperDate = new Date(!date ? '2000-01-01' : date);

    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          placeholder="Date of birth"
          id={id}
          value={date}
          onChange={(e) => onChangeInput(e.currentTarget.value)}
          className={styles.input}
          max={dateFormat(new Date())}
          min={dateFormat(new Date(new Date().setFullYear(new Date().getFullYear() - 100)))}
        />
        <Popover>
          {({ close }) => (
            <>
              <Popover.Button className={cn(styles.calendar, styles.position)}>
                <Image src={calendar} alt="calendar" />
              </Popover.Button>
              <Popover.Panel>
                <DatePicker
                  onDone={onChangeInput}
                  onClose={close}
                  currentDate={swiperDate}
                  language={language}
                />
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    );
  }
);

DatePickerInput.displayName = 'DatePickerInput';

export default memo(DatePickerInput);