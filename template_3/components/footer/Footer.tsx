import styles from './footer.module.scss';
import Link from 'next/link';
import Underline from '../underline/Underline';
import ShareApp from './share-app/ShareApp';
import Text from '../text';

const Footer = () => {
  const navItems = [
    { href: 'https://www.whatsapp.com/?lang=en_EN' },
    { href: 'tel: +000000000000' },
    { href: 'https://web.telegram.org/k/' },
  ];

  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.container}>
        <Underline />
        <div className={styles.footer__title}>
          <Text className={styles.footer__title_text} weight='bold' size='xl'>
            Contacts
          </Text>
          <ShareApp />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.nav__item}>
                <Link href={item.href} className={styles.nav__link_item} target='_blank'/>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.footer__subtitle}>
          <div className={styles.footer__privacy}>
            Terms of use Privacy Policy
          </div>
          <div className={styles.footer__year}>
            2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;