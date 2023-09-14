import React, { useState } from 'react';
import DialogWindow from '../dialogWindow/dialogWindow';
import styles from './header.module.scss';
import { Link } from 'react-scroll';
import MobileMenu from './mobileMenu/mobileMenu';
import Image from 'next/image';
import UserIcon from '@/public/icons/user_icon.svg'
import { useTranslation } from 'next-i18next';
import Switch from './switch/switch';

const navItems = [
  { to: 'about' },
  { to: 'services' },
  { to: 'schedule' },
  { to: 'questions' },
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

  const handleOpenDialog = (component: 'login' | 'signUp') => {
    setActiveModal('dialog');
    setCurrentDialogComponent(component);
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
                  {t(`header_link_${index + 1}`)}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.nav__border} />
        </nav>
        <button className={styles.header__user_icon} onClick={() => handleOpenDialog('login')}>
          <Image src={UserIcon} alt='user icon' />
        </button>
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