import styles from './menuButton.module.scss';
import React from 'react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  const buttonClassName = isOpen ? `${styles.menu_button} ${styles.open}` : `${styles.menu_button} ${styles.closed}`;

  return (
    <div className={buttonClassName} onClick={onClick}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
      ))}
    </div>
  );
};

export default MenuButton;