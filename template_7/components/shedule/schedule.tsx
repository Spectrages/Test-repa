import styles from "./schedule.module.scss";
import ScheduleTable from "./table/scheduleTable";
import { Button } from "@/components/button";

const Schedule = () => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = Array.from({ length: 16 }, (_, i) => 7 + i);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <ScheduleTable daysOfWeek={daysOfWeek} hours={hours} />
      </div>
      <div className={styles.buttonBlock}>
        <Button className={styles.button} palette="secondary">
          order
        </Button>
      </div>
    </div>
  );
};

export default Schedule;
