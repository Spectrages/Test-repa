import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import MenuButton from './menu-button/MenuButton';
import styles from './mobile-menu.module.scss';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null); 

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: 'services', text: 'Services' },
    { to: 'contacts', text: 'Contacts' },
    { to: 'schedule', text: 'Schedule' },
    { to: 'questions', text: 'Questions' },
  ];

  useEffect(() => {
    const targetElement = mobileMenuRef.current!;

    if (isOpen) {
      disableBodyScroll(targetElement); // Блокируем скролл
    } else {
      enableBodyScroll(targetElement); // Разблокируем скролл
    }

    return () => {
      enableBodyScroll(targetElement); // Убеждаемся, что скролл разблокирован при размонтировании
    };
  }, [isOpen]);

  return (
    <div className={`${styles.mobile_menu} ${isOpen ? styles.open : styles.closed}`} ref={mobileMenuRef}>
      <MenuButton isOpen={isOpen} onClick={toggleMenu} />
      <nav className={`${styles.menu_links} ${isOpen ? styles.open : ''}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} smooth={true} duration={500} className={styles.nav__item} onClick={closeMenu}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;