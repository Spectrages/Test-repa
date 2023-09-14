import styles from './benefit-item.module.scss';
import Image, { StaticImageData } from 'next/image';

interface IBenefitItem {
  source: StaticImageData,
  title: React.ReactNode,
  subtitle: React.ReactNode,
};

const BenefitItem: React.FC<IBenefitItem> = ({ source, title, subtitle}) => {
  return (
    <div className={styles.benefit_item}>
      <Image src={source} alt="benefit image" className={styles.benefit_image}/>
      <div className={styles.benefit_item__title}>
        {title}
      </div>
      <div className={styles.benefit_item__subtitle}>
        {subtitle}
      </div>
    </div>
  );
};

export default BenefitItem;