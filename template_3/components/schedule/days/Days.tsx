import styles from './days.module.scss';
import Text from '@/components/text';

const Days = () => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <ul className={styles.days}>
      {weekDays.map((day, index) => (
        <li className={styles.days__item} key={index}>
          <Text className={styles.days__item_text} size='lg' weight='medium'>{day}</Text>
        </li>
      ))}
    </ul>
  );
}

export default Days;