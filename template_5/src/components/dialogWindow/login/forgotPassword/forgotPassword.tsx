import React, { useState } from 'react';
import styles from './forgotPassword.module.scss';
import ForgotPasswordStepOne from './forgotPasswordStepOne/forgotPasswordStepOne';
import ForgotPasswordStepTwo from './forgotPasswordStepTwo/forgotPasswordStepTwo';
import ForgotPasswordStepThree from './forgotPasswordStepThree/forgotPasswordStepThree';
import ForgotPasswordStepFour from './forgotPasswordStepFour/forgotPasswordStepFour';
import Login from '../logIn';
import Text from '@/components/text';
import { IForgotPasswordTemplate } from './types';
import { fetchEmailVerifyCode, useAppDispatch, EmailVerifyCodeSelector, useAppSelector } from '@hosting2023/redux-lib';
import { useTranslation } from 'next-i18next';


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
  const { t } = useTranslation(["auth"]);
  const dispatch = useAppDispatch();
  const emailVerifyCode = useAppSelector(EmailVerifyCodeSelector);
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
        <Text weight='bold' align='center' transform='uppercase' className={styles.forgot_password__title}>
           {t("forgot_password")}
        </Text>
      )}
      {stepComponent}
    </div>
  );
};

export default ForgotPassword;
