import styles from './days.module.scss';
import Text from '@/components/text';
import { useTranslation } from 'next-i18next';

const Days = () => {
  const { t } = useTranslation(["filters"]);
  const weekDays = [t("mon"), t("tue"), t("wed"), t("thu"), t("fri"), t("sat"), t("sun")];
  const numbersArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <ul className={styles.days}>
      {weekDays.map((day, index) => (
        <li className={styles.days__item} key={index}>
          <Text className={styles.days__item_text} size='sm'>{day}</Text>
          <Text className={styles.days__item_number} weight='medium'>{numbersArray[index]}</Text>
        </li>
      ))}
    </ul>
  );
}

export default Days;