import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import TGImage from '@/public/icons/telegram.svg'
import WhatsAppImage from '@/public/icons/whatsapp.svg'
import ViberImage from '@/public/icons/viber.svg'
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation(["seo", "common"]);
  const navItems = [
    { href: 'https://web.telegram.org/k/', src: TGImage, text: t(`telegram`, { ns: "common" }) },
    { href: 'https://www.viber.com/', src: ViberImage, text: t(`viber`, { ns: "common" }) },
    { href: 'https://www.whatsapp.com/?lang=en_EN', src: WhatsAppImage, text: t(`whatsapp`, { ns: "common" }) },
  ];

  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.nav__item}>
                <Link href={item.href} className={styles.nav__link_item} target='_blank'>
                  <Image src={item.src} alt='Messenger' className={styles.image} />
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