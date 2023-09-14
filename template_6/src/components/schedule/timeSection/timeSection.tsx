import React from 'react';
import cn from 'classnames';

import styles from './timeSection.module.scss';
import TimeSlot from './timeSlot/timeSlot';
import { IGetWorkerResponse } from "@hosting2023/redux-lib/dist/src/utils/types/interfaces/get-worker.interface";
import Text from '@/components/text';
import { HourType, startHour, endHour } from './types';
import { useTranslation } from 'next-i18next';

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
  activeWeekdays?: string[];
  startTime: string;
  endTime: string;
  startHour?: HourType;
}

const TimeSection: React.FC<TimeSectionProps> = ({ workers, setDisabledButton, setStartTime, setEndTime, setActiveWeekdays }) => {
  const { t } = useTranslation(["filters"]);
  const dayTranslationsArray = [
    { abbreviation: "MON", fullName: t("mon") },
    { abbreviation: "TUE", fullName: t("tue") },
    { abbreviation: "WED", fullName: t("wed") },
    { abbreviation: "THU", fullName: t("thu") },
    { abbreviation: "FRI", fullName: t("fri") },
    { abbreviation: "SAT", fullName: t("sat") },
    { abbreviation: "SUN", fullName: t("sun") },
  ];

  const updateButtonState = () => {
    setDisabledButton(false);
  };

  const schedule = workers[0]?.profile.schedule;

  const timeSlotsByDay: { [key: string]: TimeSlotType[] } = {};

  schedule?.forEach((scheduleItem) => {
    const startTimeParts = scheduleItem.startTime.split(':');
    const endTimeParts = scheduleItem.endTime.split(':');
    scheduleItem.activeWeekdays.forEach((weekDay) => {
      const startTime: HourType = startTimeParts[0] as HourType;
      const endTime: HourType = endTimeParts[0] as HourType;

      let currentStartTime = startTime;
      while (currentStartTime < endTime) {
        const currentEndTime = (parseInt(currentStartTime) + 2).toString() as HourType;
        const timeSlot: TimeSlotType = {
          id: `${weekDay}_${currentStartTime}-${currentEndTime}`,
          className: cn(styles.time_section__item, styles[weekDay], startHour[currentStartTime], endHour[currentEndTime]),
          startTime: currentStartTime + ':' + startTimeParts[1],
          endTime: currentEndTime + ':' + endTimeParts[1],
          weekday: weekDay,
        };

        if (!timeSlotsByDay[weekDay]) {
          timeSlotsByDay[weekDay] = [];
        }
        timeSlotsByDay[weekDay]?.push(timeSlot);

        currentStartTime = currentEndTime;
      }
    });
  });

  const weekDays: string[] = [];
  const order = (startTime: string, endTime: string, weekDay: string) => {
    setStartTime(startTime);
    setEndTime(endTime);
    weekDays.push(weekDay);
    console.log(weekDays)
    setActiveWeekdays(weekDays);
  };

  return (
    <div className={styles.time_section}>
      {dayTranslationsArray.map((day, index) => (
        <div key={index}>
          <div className={styles.time_section__day_line}>
            <Text className={styles.time_section__day} transform='uppercase' color='white'>
              {day.fullName}
            </Text>
          </div>
          <div className={styles.time_section__time_line}>
            {timeSlotsByDay[day.abbreviation]?.map((slot, index) => (
              <div key={index} className={slot.className}>
                <>
                  <input
                    id={slot.id}
                    type="radio"
                    name={slot.id}
                    onChange={() => {
                      updateButtonState();
                      order(
                        slot.startTime,
                        slot.endTime,
                        slot.weekday
                      );
                    }}
                  />
                  <TimeSlot slot={slot} />
                </>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSection;
