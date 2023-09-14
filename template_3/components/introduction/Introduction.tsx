import styles from './introduction.module.scss';
import UnderLine from '@/components/underline/Underline';
import { Link } from 'react-scroll';
import Image from 'next/image';
import womanImage from '@/public/images/woman.png';
import introductionMobileImage from '@/public/images/introduction-mobile.png';

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.container}>
        <div className={styles.introduction__main_section}>
          <div className={styles.introduction__left_block}>
            <div className={styles.introduction__star}></div>
            <h1 className={styles.introduction__title}>
              Transform your space with our expert Cleaning Services - Experience the Difference Today!
            </h1>
            <Link to='schedule' smooth={true} duration={500} className={styles.introduction__button}>
              Schedule
            </Link>
          </div>
          <div className={styles.introduction__right_block}>
            <Image src={womanImage} alt="woman"/>
          </div>
          <div className={styles.introduction__mobile_right_block}>
            <Image src={introductionMobileImage} alt="introduction"/>
          </div>
        </div>
        <UnderLine />
      </div>
    </div>
  );
};

export default Introduction;