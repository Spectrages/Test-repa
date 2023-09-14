import React, { useState } from 'react';
import DialogWindow from '../dialog-window/DialogWindow';
import styles from './header.module.scss';
import { Link } from 'react-scroll';
import Button from '../button/Button';
import MobileMenu from './mobile-menu/MobileMenu';

const navItems = [
  { to: 'services', text: 'Services' },
  { to: 'contacts', text: 'Contacts' },
  { to: 'schedule', text: 'Schedule' },
  { to: 'questions', text: 'Questions' },
];

const Header = () => {
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

  const menuButtons = [
    { label: 'Sign up', onClick: () => handleOpenDialog('signUp') },
    { label: 'Log In', onClick: () => handleOpenDialog('login') },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} smooth={true} duration={500} className={styles.nav__item}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.header__buttons}>
          {menuButtons.map((button, index) => (
            <Button
              key={index}
              name={styles.button}
              onClick={button.onClick}
              type="primary-button"
              isDisabled={false}
            >
              {button.label}
            </Button>
          ))}
        </div>
        <MobileMenu />
      </div>
      <div className={styles.backdrop} style={{ display: activeModal ? 'block' : 'none' }}></div>
      {activeModal === 'dialog' && currentDialogComponent && (
        <DialogWindow
          title={currentDialogComponent === 'login' ? 'Log In' : 'Sign Up'}
          isOpen={true}
          onClose={handleCloseModal}
          currentComponentParam={currentDialogComponent}
        />
      )}
    </header>
  );
};

export default Header;