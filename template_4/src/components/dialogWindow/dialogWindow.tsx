import React, { useEffect, useRef, useState } from 'react';
import Login from './login/logIn';
import SignUp from './signup/signUp';
import DialogContent from './dialogContent/dialogContent';
import styles from './dialogWindow.module.scss';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Image from 'next/image';
import CloseCrossIcon from '@/public/icons/cross.svg';

interface IDialogWindow {
  isOpen: boolean;
  onClose: () => void;
  currentComponentParam: 'login' | 'signUp' | 'toOrder';
}

enum CurrentDialogComponent {
  Login = 'login',
  SignUp = 'signUp',
  ToOrder = 'toOrder'
}

const DialogWindow: React.FC<IDialogWindow> = ({ isOpen, onClose, currentComponentParam }) => {
  const [currentComponent, setCurrentComponent] = useState<'login' | 'signUp' | 'toOrder'>(currentComponentParam);
  const dialogRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const targetElement = dialogRef.current!;
    const handleOutsideClick = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleOutsideClick);
      disableBodyScroll(targetElement);
    } else {
      window.removeEventListener('mousedown', handleOutsideClick);
      enableBodyScroll(targetElement);
    }
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      enableBodyScroll(targetElement);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
  };

    const openLogin = () => {
    setCurrentComponent('login');
  };

  const openRegister = () => {
    setCurrentComponent('signUp');
  };

  return (
    <div className={`${styles.dialog_window} ${isOpen ? styles.open : ''}`} ref={dialogRef}>
      <div>
        {currentComponent === CurrentDialogComponent.Login && <Login onClose={handleClose} />}
        {currentComponent === CurrentDialogComponent.SignUp && <SignUp onClose={handleClose} />}
        {currentComponent === CurrentDialogComponent.ToOrder && <DialogContent openRegister={openRegister} openLogin={openLogin} />}
      </div>
      <button className={styles.close_button} onClick={onClose}>
        <Image src={CloseCrossIcon} alt='close cross' />
      </button>
    </div>
  );
};

export default DialogWindow;