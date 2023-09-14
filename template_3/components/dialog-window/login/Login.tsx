import React, { useState } from 'react';
import ForgotPassword from './forgot-password/ForgotPassword';
import LoginContent from './login-content/LoginContent';

interface ILogInProps {
  onClose: () => void;
}

const LogIn: React.FC<ILogInProps> = ({ onClose }) => {
  const [currentComponent, setCurrentComponent] = useState(0);

  const handleClick = () => {
    onClose();
    setCurrentComponent(0);
  };

  const components = [
    <LoginContent setCurrentComponent={setCurrentComponent} handleClick={handleClick} key={currentComponent} />,
    <ForgotPassword handleClick={handleClick} key={currentComponent} />,
  ];

  return (
    <>
      {components[currentComponent]}
    </>
  );
};

export default LogIn;