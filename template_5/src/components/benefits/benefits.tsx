import styles from './benefits.module.scss';
import BenefitItem from './benefitItem/benefitItem';
import benefitsData from './benefitsData';
import { useTranslation } from 'next-i18next';
import CleaningBenefits from './cleaningBenefits/cleaningBenefits';

const Benefits = () => {
  const { t } = useTranslation(["seo", "common"]);
  return (
    <div id='about' className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.benefits__list}>
          {benefitsData.map((item, index) => (
            <BenefitItem
              key={index}
              source={item.source}
              title={t(`benefit_title_${index + 1}`)}
              subtitle={t(`benefit_body_${index + 1}`)}
            />
          ))}
        </div>
        <CleaningBenefits />
      </div>
    </div>
  );
};

export default Benefits;