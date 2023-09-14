import styles from './cleaning-text-card.module.scss';

interface ICleaningTextCard {
  title: React.ReactNode,
  description: React.ReactNode[]
};

const CleaningTextCard: React.FC<ICleaningTextCard> = ({ title, description }) => {
  return (
    <div className={styles.cleaning_text_card}>
      <div className={styles.cleaning_text_card__title}>
        {title}
      </div>
      <ul className={styles.cleaning_text_card__description}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CleaningTextCard;