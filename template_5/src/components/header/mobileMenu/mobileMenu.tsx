import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import MenuButton from './menuButton/menuButton';
import styles from './mobileMenu.module.scss';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Text from '@/components/text';
import { useTranslation } from 'next-i18next';

const MobileMenu = () => {
  const { t } = useTranslation(["seo"]);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuBackdropRef = useRef<HTMLDivElement>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);


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
    { to: 'schedule' },
    { to: 'services' },
    { to: 'contacts' },
  ];


  
  useEffect(() => {
    const targetElement = mobileMenuRef.current!;
  
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
      window.addEventListener('click', handleMobileMenuBackdropClick);
    } else {
      enableBodyScroll(targetElement);
      window.removeEventListener('click', handleMobileMenuBackdropClick);
    }
  
    return () => {
      window.removeEventListener('click', handleMobileMenuBackdropClick);
      enableBodyScroll(targetElement);
    };
  }, [isOpen, activeMobileMenu]);

  return (
    <div className={`${styles.mobile_menu} ${isOpen ? styles.open : styles.closed}`} ref={mobileMenuRef}>
      <MenuButton isOpen={isOpen} onClick={() => toggleMenu()} />
      <nav className={`${styles.menu_links} ${isOpen ? styles.open : ''}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} smooth={true} duration={500} className={styles.nav__item} onClick={closeMenu}>
                <Text transform='uppercase' weight='semiBold' size='xxs'>
                  {t(`header_link_${index + 1}`)}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.mobile_menu_backdrop} ref={mobileMenuBackdropRef} style={{ display: activeMobileMenu ? 'block' : 'none' }} />
    </div>
  );
};

export default MobileMenu;