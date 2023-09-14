import styles from './cleaningTextCard.module.scss';
import Text from '@/components/text';

interface ICleaningTextCard {
  title: React.ReactNode,
  subtitle: React.ReactNode,
};

const CleaningTextCard: React.FC<ICleaningTextCard> = ({ title, subtitle }) => {
  return (
    <div className={styles.cleaning_text_card}>
      <Text weight='semiBold' align='center' className={styles.cleaning_text_card__title}>
        {title}
      </Text>
      <Text size='sm' align='center' className={styles.cleaning_text_card__subtitle}>
        {subtitle}
      </Text>
    </div>
  );
};

export default CleaningTextCard;