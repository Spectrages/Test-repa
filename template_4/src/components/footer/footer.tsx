import styles from './footer.module.scss';
import Link from 'next/link';
import Text from '../text';
import { Button } from '../button';
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

  function openWhatsApp() {
    const phoneNumber = '+000000000000';
    const message = 'Hello, I want to order your services';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__contact_me}>
          <Text color='brown' weight='semiBold' align='left' className={styles.footer__contact_me_text}>
            {t(`contacts_subheader`)}
          </Text>
          <Button className={styles.footer__contact_me_button} onClickHandler={() => {openWhatsApp()}}>
            {t(`order_btn`, { ns: "common" })}
          </Button>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.nav__item}>
                <Link href={item.href} className={styles.nav__link_item} target='_blank'>
                  <Image src={item.src} alt='Messenger' className={styles.image} />
                  <Text color='white' className={styles.nav__link_item_text} >
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