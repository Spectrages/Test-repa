import React, { useState } from 'react';
import styles from './forgot-password.module.scss';
import ForgotPasswordStepOne from './forgot-password-step-one/ForgotPasswordStepOne';
import ForgotPasswordStepTwo from './forgot-password-step-two/ForgotPasswordStepTwo';
import ForgotPasswordStepThree from './forgot-password-step-three/ForgotPasswordStepThree';
import ForgotPasswordStepFour from './forgot-password-step-four/ForgotPasswordStepFour';
import Login from '../Login';
import Text from '@/components/text';
import { IForgotPasswordTemplate } from './types';
import { fetchEmailVerifyCode, useAppDispatch, EmailVerifyCodeSelector, useAppSelector } from '@hosting2023/redux-lib';


interface ForgotPasswordProps {
  handleClick: () => void;
}

enum ForgotPasswordSteps {
  ToLogin,
  StepOne,
  StepTwo,
  StepThree,
}

const IInitialState: IForgotPasswordTemplate = {
  email: '',
  newPassword: '',
  repeatPassword: '',
  code: ''
};

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ handleClick }) => {
  const dispatch = useAppDispatch();
  const emailVerifyCode = useAppSelector(EmailVerifyCodeSelector); // Используйте EmailVerifyCodeSelector для получения кода верификации.
  const [data, setData] = useState<IForgotPasswordTemplate>(IInitialState);
  const [currentStep, setCurrentStep] = useState(ForgotPasswordSteps.StepOne);
  const [email, setEmail] = useState('');

  

  const handleGetData = (generalData: any) => {
    setData(Object.assign(data, generalData));
    dispatch(fetchEmailVerifyCode(generalData));
  };

  const handleStepTwo = (nextEmail: string) => {
    setEmail(nextEmail);
    setCurrentStep(ForgotPasswordSteps.StepTwo);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToLogin = () => {
    setCurrentStep(ForgotPasswordSteps.ToLogin);
  };

  let stepComponent;

  switch (currentStep) {
    case ForgotPasswordSteps.ToLogin:
      stepComponent = <Login onClose={handleClick} />;
      break;
    case ForgotPasswordSteps.StepOne:
      stepComponent = (
        <ForgotPasswordStepOne
          handleNextStep={handleStepTwo}
          fieldClassName={styles.forgot_password__field}
          buttonClassName={styles.forgot_password__button}
          handleGetData={handleGetData}
        />
      );
      break;
    case ForgotPasswordSteps.StepTwo:
      stepComponent = (
        <ForgotPasswordStepTwo
          email={email}
          emailVerifyCode={emailVerifyCode}
          handleNextStep={handleNextStep}
          fieldClassName={styles.forgot_password__field}
          buttonClassName={styles.forgot_password__button}
          handleGetData={handleGetData}
        />
      );
      break;
    case ForgotPasswordSteps.StepThree:
      stepComponent = (
        <ForgotPasswordStepThree
          handleNextStep={handleNextStep}
          fieldClassName={styles.forgot_password__field}
          buttonClassName={styles.forgot_password__button}
          handleGetData={handleGetData}
        />
      );
      break;
    default:
      stepComponent = (
        <ForgotPasswordStepFour
          goToLogin={goToLogin}
          buttonClassName={styles.forgot_password__button}
        />
      );
      break;
  }

  return (
    <div className={styles.forgot_password}>
      {currentStep !== ForgotPasswordSteps.ToLogin && (
        <Text className={styles.forgot_password__title}  size='xl' weight='bold'>Forgot Password</Text>
      )}
      {stepComponent}
    </div>
  );
};

export default ForgotPassword;
