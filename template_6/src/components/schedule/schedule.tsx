import styles from './schedule.module.scss';
import React, { useState } from 'react';
import TimeSection from './timeSection/timeSection';
import Button from '../button/button';
import DialogWindow from '../dialogWindow/dialogWindow';
import {
  fetchCreateOrder,
  useAppDispatch,
} from '@hosting2023/redux-lib';
import Text from '../text';
import { IGetWorkerResponse } from "@hosting2023/redux-lib/dist/src/utils/types/interfaces/get-worker.interface";
import { useTranslation } from 'next-i18next';

const Schedule: React.FC<{ workers: IGetWorkerResponse }> = ({ workers }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(["common"]);
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

  if (!isDisabledButton) {
    dispatch(fetchCreateOrder(requestData));
  }

  return (
    <div id='schedule' className={styles.schedule}>
      <div className={styles.container}>
        <Text className={styles.schedule__title} weight="bold" transform="uppercase" color="white" align='center'>
          {t("schedule", { ns: "common" })}
        </Text>
        <div className={styles.schedule__main_section}>
          <TimeSection setDisabledButton={setIsDisabledButton} setStartTime={setStartTime} setEndTime={setEndTime} workers={workers} setActiveWeekdays={setActiveWeekdays} />
          <Button className={styles.button} onClickHandler={openDialog} disabled={isDisabledButton}>
            <Text className={styles.button__text} color='white' transform='uppercase' weight='medium'>
              {t("order_btn", { ns: "common" })}
            </Text>
          </Button>
          {dialogOpen && <div className={styles.backdrop} />}
          <DialogWindow currentComponentParam='toOrder' isOpen={dialogOpen} onClose={closeDialog} />
        </div>
      </div>
    </div>
  )
}

export default Schedule;