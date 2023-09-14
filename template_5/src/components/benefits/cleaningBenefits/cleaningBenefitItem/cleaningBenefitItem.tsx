import styles from './cleaningBenefitItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import Text from '@/components/text';

interface IBenefitItem {
  source: StaticImageData,
  description: React.ReactNode,
};

const ClaeningBenefitItem: React.FC<IBenefitItem> = ({ source, description }) => {
  return (
    <div className={styles.cleaning_benefit_item}>
      <Image src={source} alt="cleaning benefit image" className={styles.cleaning_benefit_item__image}/>
      <Text weight='medium' size='xs' className={styles.cleaning_benefit_item__description}>
        {description}
      </Text>
    </div>
  );
};

export default ClaeningBenefitItem;