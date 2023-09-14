import React from 'react';
import styles from './timeSlot.module.scss';
import cn from 'classnames';
import Text from '@/components/text';

interface TimeSlot {
  id: string;
  className: string;
  startTime: string;
  endTime: string;
}

const TimeSlot: React.FC<{ slot: TimeSlot }> = ({ slot }) => {
  const classNames = cn(styles.time_section__label, slot.className);
  return (
    <label className={classNames} htmlFor={slot.id}>
      <Text className={styles.title} color='white'>
        {slot.startTime} - {slot.endTime}
      </Text>
    </label>
  );
};

export default TimeSlot;