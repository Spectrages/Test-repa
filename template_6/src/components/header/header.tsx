import React, { useState } from 'react';
import DialogWindow from '../dialogWindow/dialogWindow';
import styles from './header.module.scss';
import { Link } from 'react-scroll';
import MobileMenu from './mobileMenu/mobileMenu';
import { useTranslation } from 'next-i18next';
import Switch from './switch/switch';
import Text from '../text';

const navItems = [
  { to: 'reviews' },
  { to: 'filter' },
  { to: 'contacts' },
];

const Header = () => {
  const { t } = useTranslation(["seo"]);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentDialogComponent, setCurrentDialogComponent] = useState<'login' | 'signUp' | null>(null);

  const handleCloseModal = () => {
    setActiveModal(null);
    setCurrentDialogComponent(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Switch className={styles.switch} />
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} smooth={true} duration={500} className={styles.nav__item} onClick={handleCloseModal}>
                  <Text transform='uppercase' color='white'>
                    {t(`header_link_${index + 1}`)}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu />
      </div>
      <div className={styles.backdrop} style={{ display: activeModal ? 'block' : 'none' }}></div>
      {activeModal === 'dialog' && currentDialogComponent && (
        <DialogWindow
          isOpen={true}
          onClose={handleCloseModal}
          currentComponentParam={currentDialogComponent}
        />
      )}
    </header>
  );
};

export default Header;