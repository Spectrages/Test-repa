import styles from './benefitItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import Text from '@/components/text';

interface IBenefitItem {
  source: StaticImageData,
  title: React.ReactNode,
  subtitle: React.ReactNode,
};

const BenefitItem: React.FC<IBenefitItem> = ({ source, title, subtitle}) => {
  return (
    <div className={styles.benefit_item}>
      <Image src={source} alt="benefit image" className={styles.benefit_image}/>
      <Text weight='semiBold' size='sm' transform='uppercase' className={styles.benefit_item__title}>
        {title}
      </Text>
      <Text size='xs' align='center' weight='medium' className={styles.benefit_item__subtitle}>
        {subtitle}
      </Text>
    </div>
  );
};

export default BenefitItem;