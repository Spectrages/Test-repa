import React from 'react';
import styles from './time-section.module.scss';
import TimeSlot from './timeSlot/TimeSlot';

interface WorkerType {
  profile: {
    userId: string;
    lastName: string;
    firstName: string;
    schedule: {
      activeWeekdays: string[];
      startTime: string;
      endTime: string;
    }[];
  };
};

interface TimeSectionProps {
  workers: WorkerType[];
  setDisabledButton: React.Dispatch<React.SetStateAction<boolean>>;
  setStartTime: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<string>>;
  setActiveWeekdays: React.Dispatch<React.SetStateAction<string[]>>;
}

interface TimeSlotType {
  id: string;
  name: string;
  startTimeHour: string | undefined;
  startTimeMinute: string | undefined;
  endTimeHour: string | undefined;
  endTimeMinute: string | undefined;
  accessible: boolean;
  activeWeekdays: string[]
};

const TimeSection: React.FC<TimeSectionProps> = ({ workers, setDisabledButton, setStartTime, setEndTime, setActiveWeekdays }) => {
  const unVisibleLabel = styles.time_section__item_unvisible;

  const updateButtonState = () => {
    setDisabledButton(false);
  };

  const generateTimeSlots = (worker: WorkerType) => {
    const timeSlots: TimeSlotType[] = [];
  
    if (worker && worker.profile && worker.profile.schedule) {
      worker.profile.schedule.forEach((scheduleItem) => {
        const startTimeParts = scheduleItem.startTime.split(':');
        const endTimeParts = scheduleItem.endTime.split(':');
        scheduleItem.activeWeekdays.forEach((weekday) => {
          timeSlots.push({
            id: `${worker.profile.userId}_${weekday}_${scheduleItem.startTime}-${scheduleItem.endTime}`,
            name: `timeSlot_${worker.profile.userId}`,
            startTimeHour: startTimeParts[0],
            startTimeMinute: startTimeParts[1],
            endTimeHour: endTimeParts[0],
            endTimeMinute: endTimeParts[1],
            accessible: true,
            activeWeekdays: [weekday]
          });
        });
      });
    }
  
    return timeSlots;
  };
  const allTimeSlots = workers.flatMap((worker) => generateTimeSlots(worker));

  const numberOfSlots = allTimeSlots.length;

  if (numberOfSlots < 7) {
    const emptySlotsToAdd = 7 - numberOfSlots;
    for (let i = 0; i < emptySlotsToAdd; i++) {
      allTimeSlots.push({
        id: `empty_slot_${i}`,
        name: `empty_slot_${i}`,
        startTimeHour: undefined,
        startTimeMinute: undefined,
        endTimeHour: undefined,
        endTimeMinute: undefined,
        accessible: false,
        activeWeekdays: []
      });
    }
  }

  const order = (startTimeHour: string | undefined, startTimeMinute: string | undefined, endTimeHour: string | undefined, endTimeMinute: string | undefined, activeWeekdays: string[]) => {
    const startTimeCombined = `${startTimeHour}:${startTimeMinute}`;
    const endTimeCombined = `${endTimeHour}:${endTimeMinute}`;
    setStartTime(startTimeCombined);
    setEndTime(endTimeCombined);
    setActiveWeekdays(activeWeekdays)
  };

  return (
    <div className={styles.time_section}>
      {allTimeSlots.map((slot, index) => (
        <div key={index} className={styles.time_section__item}>
          {slot.accessible ? (
            <>
              <input
                id={slot.id}
                type="radio"
                name={slot.name}
                onChange={() => {
                  updateButtonState();
                  order(
                    slot.startTimeHour,
                    slot.startTimeMinute,
                    slot.endTimeHour,
                    slot.endTimeMinute,
                    slot.activeWeekdays
                  );
                }}
              />
              <TimeSlot slot={slot} />
            </>
          ) : (
            <label className={unVisibleLabel} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TimeSection;