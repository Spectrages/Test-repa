import React, { useEffect, useRef, useState } from 'react';
import Login from './login/Login';
import SignUp from './signup/SignUp';
import DialogContent from './dialog-content/DialogContent';
import styles from './dialog-window.module.scss';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface IDialogWindow {
  title: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  // children: React.ReactNode;
  currentComponentParam: 'login' | 'signUp' | 'toOrder';
}

enum CurrentDialogComponent {
  Login = 'login',
  SignUp = 'signUp',
  ToOrder = 'toOrder'
}

const DialogWindow: React.FC<IDialogWindow> = ({ title, isOpen, onClose, currentComponentParam }) => {
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
        {currentComponent === CurrentDialogComponent.ToOrder && <DialogContent title={title} openRegister={openRegister} openLogin={openLogin} />}
      </div>
      <button className={styles.close_button} onClick={onClose}></button>
    </div>
  );
};

export default DialogWindow;