import styles from './introduction.module.scss';
import { Link } from 'react-scroll';
import { Button } from '../button';
import Text from '../text';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import IntroImage from '@/public/images/intro_image.jpg';

const Introduction = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className={styles.introduction}>
      <div className={styles.container}>
        <div className={styles.introduction__left_block}>
          <Text weight='light' className={styles.introduction__left_block_description} size='xs'>
            {t("intro_description")}
          </Text>
          <h1 className={styles.introduction__title}>
            {t("header")}
          </h1>
          <Text weight='medium' size='sm' className={styles.introduction__left_block_text}>
            {t("subheader")}
          </Text>
          <Link to='filter' smooth={true} duration={500}>
            <Button className={styles.introduction__button}>
              {t("filter_btn")}
            </Button>
          </Link>
        </div>
        <div className={styles.introduction__right_block}>
          <Image src={IntroImage} alt='introduction image' />
        </div>
      </div>
      <div className={styles.introduction__decoration_block} />
    </div>
  );
};

export default Introduction;