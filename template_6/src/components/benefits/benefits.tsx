import styles from './benefits.module.scss';
import BenefitItem from './benefitItem/benefitItem';
import { useTranslation } from 'next-i18next';
import Text from '../text';

const Benefits = () => {
  const { t } = useTranslation(["seo", "common"]);
  const benefitsData = [
    {
      title: t(`benefit_title_1`),
      subtitle: t(`benefit_body_1`)
    },
    {
      title: t(`benefit_title_2`),
      subtitle: t(`benefit_body_2`)
    },
    {
      title: t(`benefit_title_3`),
      subtitle: t(`benefit_body_3`)
    },
    {
      title: t(`benefit_title_4`),
      subtitle: t(`benefit_body_4`)
    },
  ];
  return (
    <div id='about' className={styles.benefits}>
      <div className={styles.container}>
        <Text className={styles.benefits__title} align='center' color='gray_dark' transform='uppercase' weight='bold'>
            {t("benefits", {ns: "common"})}
        </Text>
        <div className={styles.benefits__list}>
          {benefitsData.map((item, index) => (
            <BenefitItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;