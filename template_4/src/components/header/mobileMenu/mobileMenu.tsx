import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import MenuButton from './menuButton/menuButton';
import styles from './mobileMenu.module.scss';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Text from '@/components/text';
import { Button } from '@/components/button';
import DialogWindow from '@/components/dialogWindow/dialogWindow';
import { useTranslation } from 'next-i18next';

const MobileMenu = () => {
  const { t } = useTranslation(["seo"]);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const mobileMenuBackdropRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [currentDialogComponent, setCurrentDialogComponent] = useState<'login' | 'signUp' | null>(null);

  const handleOpenDialog = (component: 'login' | 'signUp') => {
    setActiveModal('dialog');
    setCurrentDialogComponent(component);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setCurrentDialogComponent(null);
  };

  const toggleMenu = () => {
    if (activeMobileMenu) {
      setActiveMobileMenu(null);
    } else {
      setActiveMobileMenu('block');
    }
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setActiveMobileMenu(null);
    setIsOpen(false);
  };

  const navItems = [
    { to: 'about' },
    { to: 'services' },
    { to: 'schedule' },
    { to: 'questions' },
    { to: 'contacts' },
  ];

  const menuButtons = [
    { onClick: () => handleOpenDialog('signUp') },
    { onClick: () => handleOpenDialog('login') },
  ];

  
  useEffect(() => {
    const targetElement = mobileMenuRef.current!;
  
    const handleBackdropClick = (e: MouseEvent) => {
      if (
        activeModal === 'block' &&
        backdropRef.current &&
        !backdropRef.current.contains(e.target as Node) &&
        !mobileMenuRef.current?.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };
  
    const handleMobileMenuBackdropClick = (e: MouseEvent) => {
      if (
        activeMobileMenu === 'block' &&
        mobileMenuBackdropRef.current &&
        mobileMenuBackdropRef.current.contains(e.target as Node) &&
        mobileMenuRef.current?.contains(e.target as Node)
      ) {
        setActiveMobileMenu(null);
        setIsOpen(false);
      }
    };
  
    if (isOpen) {
      disableBodyScroll(targetElement);
      window.addEventListener('click', handleBackdropClick);
      window.addEventListener('click', handleMobileMenuBackdropClick);
    } else {
      enableBodyScroll(targetElement);
      window.removeEventListener('click', handleBackdropClick);
      window.removeEventListener('click', handleMobileMenuBackdropClick);
    }
  
    return () => {
      window.removeEventListener('click', handleBackdropClick);
      window.removeEventListener('click', handleMobileMenuBackdropClick);
      enableBodyScroll(targetElement);
    };
  }, [isOpen, activeModal, activeMobileMenu]);

  return (
    <div className={`${styles.mobile_menu} ${isOpen ? styles.open : styles.closed}`} ref={mobileMenuRef}>
      <MenuButton isOpen={isOpen} onClick={() => toggleMenu()} />
      <nav className={`${styles.menu_links} ${isOpen ? styles.open : ''}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} smooth={true} duration={500} className={styles.nav__item} onClick={closeMenu}>
                <Text color='green' weight='semiBold' size='xxs'>
                  {t(`header_link_${index + 1}`)}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.menu_links__buttons}>
          {menuButtons.map((button, index) => (
            <Button
              key={index}
              name={styles.button}
              onClickHandler={button.onClick}
            >
              {t(`mobile_menu_button_${index + 1}`)}
            </Button>
          ))}
        </div>
      </nav>
      <div className={styles.backdrop} ref={backdropRef} style={{ display: activeModal ? 'block' : 'none' }} />
      <div className={styles.mobile_menu_backdrop} ref={mobileMenuBackdropRef} style={{ display: activeMobileMenu ? 'block' : 'none' }} />
      {activeModal === 'dialog' && currentDialogComponent && (
        <DialogWindow
          isOpen={true}
          onClose={handleCloseModal}
          currentComponentParam={currentDialogComponent}
        />
      )}
    </div>
  );
};

export default MobileMenu;