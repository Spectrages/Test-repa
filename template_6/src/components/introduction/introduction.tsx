import styles from './introduction.module.scss';
import { Link } from 'react-scroll';
import { Button } from '../button';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Introduction = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className={styles.introduction}>
      <div className={styles.container}>
        <h1 className={styles.introduction__title}>
          {t("header")}
        </h1>
        <Link to='filter' smooth={true} duration={500}>
          <Button className={styles.introduction__button}>
            <Text className={styles.introduction__button_text} transform='uppercase' color='white' weight='medium'>
              {t("go_to_filter")}
            </Text>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;