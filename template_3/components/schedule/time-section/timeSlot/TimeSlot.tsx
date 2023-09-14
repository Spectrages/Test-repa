import React from 'react';
import Text from '@/components/text';
import styles from './time-slot.module.scss';

interface TimeSlot {
  id: string;
  name: string;
  startTimeHour: string | undefined;
  startTimeMinute: string | undefined;
  endTimeHour: string | undefined;
  endTimeMinute: string | undefined;
  accessible: boolean;
}

const TimeSlot: React.FC<{ slot: TimeSlot }> = ({ slot }) => {
  return (
    <label className={styles.time_section__label} htmlFor={slot.id}>
      <div className={styles.time_section__time_container}>
        <Text size='lg' weight='medium' color='white' className={styles.time_section__hour}>{slot.startTimeHour}</Text>
        <Text size='xs' weight='medium' color='white' className={styles.time_section__minute}>{slot.startTimeMinute}</Text>
      </div>
      <Text size='lg' weight='medium' color='white' className={styles.time_section__hyphen}>-</Text>
      <div className={styles.time_section__time_container}>
        <Text size='lg' weight='medium' color='white' className={styles.time_section__hour}>{slot.endTimeHour}</Text>
        <Text size='xs' weight='medium' color='white' className={styles.time_section__minute}>{slot.endTimeMinute}</Text>
      </div>
    </label>
  );
};

export default TimeSlot;