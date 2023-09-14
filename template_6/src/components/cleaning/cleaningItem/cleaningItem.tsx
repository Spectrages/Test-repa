import styles from './cleaningItem.module.scss';
import Text from '@/components/text';
import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';

interface ICleaningItem {
  title: React.ReactNode,
  source: StaticImageData,
  className?: string
};

const CleaningItem: React.FC<ICleaningItem> = ({ title, source, className }) => {
  const cleaningItemClassNames = cn(styles.cleaning_item, className)
  return (
    <div className={cleaningItemClassNames}>
      <Text color='white' size='sm' className={styles.cleaning_item__title}>
        {title}
      </Text>
      <div className={styles.cleaning_item__image}>
        <Image src={source} alt='cleaning image' />
      </div>
    </div>
  );
};

export default CleaningItem;