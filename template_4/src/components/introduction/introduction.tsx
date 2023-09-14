import styles from './introduction.module.scss';
import UnderLine from '@/components/underline/Underline';
import { Link } from 'react-scroll';
import { Button } from '../button';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Introduction = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className={styles.introduction}>
      <div className={styles.container}>
        <div className={styles.introduction__main_section}>
          <div className={styles.introduction__left_block}>
            <h1 className={styles.introduction__title}>
              {t("header", { ns: "common" })}
            </h1>
          </div>
          <div className={styles.introduction__right_block}>
            <Text color='brown' weight='medium' className={styles.introduction__right_block_text}>
              {t("subheader", { ns: "common" })}
            </Text>

            <Link to='filter' smooth={true} duration={500}>
              <Button className={styles.introduction__button}>
                {t("go_to_filter_btn", { ns: "common" })}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.introduction__underline}>
        <UnderLine />
      </div>
    </div>
  );
};

export default Introduction;