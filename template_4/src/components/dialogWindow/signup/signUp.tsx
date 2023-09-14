import styles from './signUp.module.scss';
import React, { useState } from 'react';
import FirstSignUpStep from './firstStep/firstStep';
import { ISignUpTemplate } from './types';
import SecondSignUpStep from './secondStep/secondStep';
import { fetchSignUp, fetchCheckAuth, useAppDispatch } from '@hosting2023/redux-lib';

interface ISignUpProps {
  onClose: () => void;
}

const IInitialState: ISignUpTemplate = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  mobilePhone: '',
  password: '',
};

const SignUp: React.FC<ISignUpProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<ISignUpTemplate>(IInitialState);
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleClick = () => {
    onClose();
    setCurrentStep(0);
  };

  const handleGetData = async (generalData: any) => {
    try {
      setData(Object.assign(data, generalData));
      await dispatch(fetchSignUp(generalData));
      await dispatch(fetchCheckAuth());
    } catch (error) {
      console.error('SignUp error:', error);
    }
  };

  const components = [
    <FirstSignUpStep setCurrentStep={setCurrentStep} handleGetData={handleGetData} key={currentStep} />,
    <SecondSignUpStep setCurrentStep={setCurrentStep} handleClick={handleClick} handleGetData={handleGetData} key={currentStep}/>
  ];

  return (
    <div className={styles.sign_up}>
       {components[currentStep]}
    </div>
  );
};

export default SignUp;