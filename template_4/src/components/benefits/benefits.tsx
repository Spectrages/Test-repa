import styles from './benefits.module.scss';
import BenefitItem from './benefitItem/benefitItem';
import benefitsData from './benefitsData';
import Text from '../text';
import { useTranslation } from 'next-i18next';


const Benefits = () => {
  const { t } = useTranslation(["seo", "common"]);
  return (
    <div id='about' className={styles.benefits}>
      <div className={styles.container}>
        <Text className={styles.benefits__title} align='center' size='xxxl' weight='bold' color='brown'>
          {t("benefits", { ns: "common" })}
        </Text>
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
      </div>
    </div>
  );
};

export default Benefits;