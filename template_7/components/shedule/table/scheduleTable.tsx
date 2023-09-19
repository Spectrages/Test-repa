import { FC, useState } from "react";
import styles from "./scheduleTable.module.scss";
import Text from "@/components/text";

interface IProps {
  daysOfWeek: string[];
  hours: number[];
}

const ScheduleTable: FC<IProps> = ({ daysOfWeek, hours }) => {
  const [date] = useState(new Date());

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const monthName = date.toLocaleString("default", { month: "long" });

  return (
    <div>
      <div className={styles.title}>
        <Text size="lg" weight="normal" transform="capitalize">
          {monthName}
        </Text>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map((day, index) => (
              <th key={day} className={styles.columnHeader}>
                <Text size="base" weight="normal" transform="lowercase">
                  {day}{" "}
                  <Text size="lg" weight="normal" transform="lowercase">
                    {index + 1 <= daysInMonth ? index + 1 : ""}
                  </Text>
                </Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className={styles.hourCell}>
                <Text size="lg" weight="normal" transform="lowercase">
                  {hour}
                </Text>
              </td>
              {daysOfWeek.map((day) => (
                <td key={day} className={styles.cell} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
