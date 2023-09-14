import React from 'react';
import styles from './timeSlot.module.scss';
import cn from 'classnames';

interface TimeSlot {
  id: string;
  className: string;
}

const TimeSlot: React.FC<{ slot: TimeSlot }> = ({ slot }) => {
  const classNames = cn(styles.time_section__label, slot.className);
  return (
    <label className={classNames} htmlFor={slot.id} />
  );
};

export default TimeSlot;