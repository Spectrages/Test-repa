import styles from './button.module.scss';
import React, { MouseEventHandler } from "react";
import cn from 'classnames';
import Text from '../text';

export interface IButton {
  name?: string,
  children: React.ReactNode,
  onClick: MouseEventHandler<HTMLButtonElement>,
  type: string,
  isDisabled: boolean
};

enum TypeOfButton {
  PrimaryButton = 'primary-button',
  PrimaryUsualButton = 'primary-usual-button',
  Button = 'button',
}

const Button: React.FC<IButton> = ({ name, children, onClick, type, isDisabled}) => {
  const primaryClassNames = cn(styles.button, styles.button__primary, name);
  const primaryUsualClassNames = cn(styles.button, styles.button__primary, styles.button__primary_usual_size, name);
  const buttonClassNames = cn(styles.button, name);

  const renderButtonContent = () => {
    if (type === TypeOfButton.PrimaryUsualButton) {
      return <Text className={styles.button__text}>{children}</Text>;
    }
    return children;
  };

  const getClassNames = () => {
    switch (type) {
      case TypeOfButton.PrimaryButton:
        return primaryClassNames;
      case TypeOfButton.PrimaryUsualButton:
        return primaryUsualClassNames;
      case TypeOfButton.Button:
        return buttonClassNames;
      default:
        return styles.button;
    }
  };

  return (
    <button className={getClassNames()} onClick={onClick} disabled={isDisabled}>
      {renderButtonContent()}
    </button>
  );
};

export default Button;