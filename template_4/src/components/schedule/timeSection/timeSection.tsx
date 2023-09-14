import React from 'react';
import cn from 'classnames';

import styles from './timeSection.module.scss';
import TimeSlot from './timeSlot/timeSlot';
import { IGetWorkerResponse } from "@hosting2023/redux-lib/dist/src/utils/types/interfaces/get-worker.interface";
import Text from '@/components/text';
import { HourType, startHour, endHour } from './types';

interface TimeSectionProps {
  workers: IGetWorkerResponse;
  setDisabledButton: React.Dispatch<React.SetStateAction<boolean>>;
  setStartTime: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<string>>;
  setActiveWeekdays: React.Dispatch<React.SetStateAction<string[]>>;
}

interface TimeSlotType {
  id: string;
  className: string;
  weekday: string;
  activeWeekdays: string[];
  startTime: string;
  endTime: string;
  startHour?: HourType;
}

const TimeSection: React.FC<TimeSectionProps> = ({ workers, setDisabledButton, setStartTime, setEndTime, setActiveWeekdays }) => {
  const timeLines = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  const updateButtonState = () => {
    setDisabledButton(false);
  };

  const schedule = workers[0]?.profile.schedule;

  const timeSlots: TimeSlotType[] = [];
  schedule?.forEach((scheduleItem) => {
    const startTimeParts = scheduleItem.startTime.split(':');
    const endTimeParts = scheduleItem.endTime.split(':');
    scheduleItem.activeWeekdays.forEach((weekDay) => {
      const startTime: HourType = startTimeParts[0] as HourType;
      const endTime: HourType = endTimeParts[0] as HourType;
      
      timeSlots.push({
        id: `${weekDay}_${startTime}-${endTime}`,
        className: cn(styles.time_section__item, styles[weekDay], startHour[startTime], endHour[endTime]),
        startTime,
        endTime,
        weekday: weekDay,
        activeWeekdays: [weekDay]
      });
    });
  });

  const order = (startTime: string, endTime: string, activeWeekdays: string[]) => {
    setStartTime(startTime);
    setEndTime(endTime);
    setActiveWeekdays(activeWeekdays);
  };

  return (
    <div className={styles.time_section}>
      {timeLines.map((time, index) => (
        <div key={index} className={styles.time_section__time_line}>
          <Text weight='bold' size='sm' className={styles.time_section__time}>
            {time}
          </Text>
        </div>
      ))}
      {timeSlots?.map((slot, index) => (
        <div key={index} className={slot.className}>
          <>
            <input
              id={slot.id}
              type="radio"
              name='schedule'
              onChange={() => {
                updateButtonState();
                order(
                  slot.startTime,
                  slot.endTime,
                  slot.activeWeekdays
                );
              }}
            />
            <TimeSlot slot={slot} />
          </>
        </div>
      ))}
    </div>
  );
};

export default TimeSection;