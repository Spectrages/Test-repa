import styles from './footer.module.scss';
import Link from 'next/link';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation(["seo", "common"]);
  const navItems = [
    { href: 'https://web.telegram.org/k/', text: t(`footer_link_1`) },
    { href: 'https://www.viber.com/', text: t(`footer_link_2`) },
    { href: 'https://www.whatsapp.com/?lang=en_EN', text: t(`footer_link_3`) },
  ];

  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.container}>
        <Text className={styles.footer__title} size='sm' align='center'>
          {t(`contacts`, { ns: "common" })}
        </Text>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.nav__item}>
                <Link href={item.href} className={styles.nav__link_item} target='_blank'>
                  <Text  className={styles.nav__link_item_text} transform='uppercase'>
                    {item.text}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;