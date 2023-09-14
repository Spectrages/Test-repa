import styles from './benefitItem.module.scss';
import Text from '@/components/text';

interface IBenefitItem {
  title: React.ReactNode,
  subtitle: React.ReactNode,
};

const BenefitItem: React.FC<IBenefitItem> = ({ title, subtitle}) => {
  return (
    <div className={styles.benefit_item}>
      <Text weight='bold' color='blue' align='left' transform='uppercase' className={styles.benefit_item__title}>
        {title}
      </Text>
      <Text size='sm' className={styles.benefit_item__subtitle}>
        {subtitle}
      </Text>
    </div>
  );
};

export default BenefitItem;