import styles from './schedule.module.scss';
import React, { useState } from 'react';
import Underline from '../underline/Underline';
import Days from './days/Days';
import Underlines from './underlines/underlines';
import Numbers from './numbers/Numbers';
import TimeSection from './time-section/TimeSection';
import Button from '../button/Button';
import DialogWindow from '../dialog-window/DialogWindow';
import {
  fetchCreateOrder,
  useAppDispatch,
} from '@hosting2023/redux-lib';

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
}

const Schedule: React.FC<{ workers: WorkerType[] }> = ({ workers }) => {
  const dispatch = useAppDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [startTimeState, setStartTime] = useState('');
  const [endTimeState, setEndTime] = useState('');
  const [activeWeekdaysState, setActiveWeekdays] = useState(['']);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const requestData = {
    activeWeekdays: activeWeekdaysState,
    startTime: startTimeState,
    endTime: endTimeState
  };

  if(!isDisabledButton) {
    dispatch(fetchCreateOrder(requestData));
  }

  return (
    <div className={styles.schedule}>
      <div className={styles.container}>
        <Underline />
        <Days />
        <Underlines count={7}/>
        <Numbers />
        <TimeSection setDisabledButton={setIsDisabledButton} setStartTime={setStartTime} setEndTime={setEndTime} workers={workers} setActiveWeekdays={setActiveWeekdays}/>
        <Button name={styles.button} onClick={openDialog} type={'primary-usual-button'} isDisabled={isDisabledButton}>
          Confirm
        </Button>
        {dialogOpen && <div className={styles.backdrop}></div>}
        <DialogWindow title='To order please login or register' currentComponentParam='toOrder' isOpen={dialogOpen} onClose={closeDialog}/>
      </div>
    </div>
  )
}

export default Schedule;