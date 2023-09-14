import styles from './ourCleaningServices.module.scss';
import Text from '../text';
import Image from 'next/image';
import WomanImage from '@/public/images/woman-image.png';
import { useTranslation } from 'next-i18next';

const OurCleaningServices = () => {
  const { t } = useTranslation(["seo"]);
  return (
    <div className={styles.our_cleaning_services}>
      <div className={styles.container}>
        <div className={styles.our_cleaning_services__text_section}>
          <Text className={styles.our_cleaning_services__text} weight='medium' align='left' color='brown'>
            {t(`our_cleaning_services_text`)}
          </Text>
        </div>
        <div className={styles.our_cleaning_services__image}>
          <Image src={WomanImage} alt='woman image' />
        </div>
      </div>
    </div>
  );
};

export default OurCleaningServices;