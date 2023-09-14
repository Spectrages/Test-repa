import styles from './cleaningBenefits.module.scss';
import ClaeningBenefitItem from './cleaningBenefitItem/cleaningBenefitItem';
import cleaningBenefitsData from './cleaningBenefitsData';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import benefitCleaningImage from '@/public/images/benefit_cleaning_image.jpg';
import Text from '@/components/text';

const CleaningBenefits = () => {
  const { t } = useTranslation(["seo", "common"]);
  
  return (
    <div id='about' className={styles.cleaning_benefits}>
      <div className={styles.cleaning_benefits__image}>
        <Image src={benefitCleaningImage} alt='cleaning benefits image' />
        <div className={styles.cleaning_benefits__image_text_section}>
          <Text className={styles.cleaning_benefits__image_text} size='xs'>
            {t(`benefits_text`, {ns: "common"})}
          </Text>
        </div>
      </div>
        <div className={styles.cleaning_benefits__list}>
          {cleaningBenefitsData.map((item, index) => (
            <ClaeningBenefitItem
              key={index}
              source={item.source}
              description={t(`benefit_cleaning_${index + 1}`)}
            />
          ))}
        </div>
    </div>
  );
};

export default CleaningBenefits;