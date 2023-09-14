import styles from './cleaningTextCard.module.scss';
import Text from '@/components/text';

interface ICleaningTextCard {
  title: React.ReactNode,
  subtitle: React.ReactNode,
  description: string[]
};

const CleaningTextCard: React.FC<ICleaningTextCard> = ({ title, description, subtitle }) => {
  return (
    <div className={styles.cleaning_text_card}>
      <Text weight='bold' align='left' className={styles.cleaning_text_card__title}>
        {title}
      </Text>
      <Text weight='semiBold' size='xs' align='left' className={styles.cleaning_text_card__subtitle}>
        {subtitle}
      </Text>
      <ul className={styles.cleaning_text_card__description}>
        {description.map((item, index) => (
          <li key={index}>
            <Text size='xs' align='left' className={styles.cleaning_text_card__description_text}>
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CleaningTextCard;