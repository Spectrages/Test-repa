import styles from './cleaning-image.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ICleaningImage {
  source: StaticImageData,
  title: React.ReactNode
};

const CleaningImage: React.FC<ICleaningImage> = ({ source, title }) => {
  return (
    <div className={styles.cleaning_image}>
      <Image src={source} alt="cleaning image" />
      <h2 className={styles.cleaning_image__title}>
        {title}
      </h2>
    </div>
  );
};

export default CleaningImage;