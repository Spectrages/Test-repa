import styles from './prepare.module.scss';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Preapare = () => {
  const { t } = useTranslation(["seo", "common"]);

  const prepareTexts = [];

  for (let i = 1; i < 4; i += 1) {
    prepareTexts.push(t(`prepare_text_${i}`))
  }

  return (
    <div className={styles.prepare}>
      <div className={styles.container}>
        <Text weight='bold' align='center' className={styles.prepare__title}>
          {t("prepare_header", { ns: "common" })}
        </Text>
        <div className={styles.prepare__text_section}>
          {prepareTexts.map((text, index) => (
            <Text key={index} size='sm' className={styles.prepare__text}>
              {text}
            </Text>
          ))}
          <div className={styles.prepare__decorate_section} />
        </div>
      </div>
    </div>
  );
};

export default Preapare;