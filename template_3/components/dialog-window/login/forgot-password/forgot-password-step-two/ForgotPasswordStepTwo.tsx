import React, { useState, useEffect } from 'react';
import styles from './forgot-password-step-two.module.scss';
import cn from 'classnames';
import ForgotPasswordFormSchema from './utils/schemas/ForgotPasswordValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '@/components/text';
// import { fetchEmailVerifyCode, fetchCheckAuth, useAppDispatch } from '@hosting2023/redux-lib';

interface ForgotPasswordStepTwoProps {
  email: string;
  handleNextStep: () => void;
  fieldClassName?: string;
  buttonClassName?: string;
  emailVerifyCode: { code: string; } | null;
  handleGetData: (generalData: any) => void;
}

interface IGeneralInfo {
  code: string;
}

const ForgotPasswordStepTwo: React.FC<ForgotPasswordStepTwoProps> = ({ email, handleNextStep, fieldClassName, buttonClassName, handleGetData, emailVerifyCode }) => {
  // const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors, isValid }, setError } = useForm<IGeneralInfo>({
    mode: 'onChange',
    resolver: yupResolver(ForgotPasswordFormSchema)
  });

  const [remainingTime, setRemainingTime] = useState(25);
  const coloredExpiration = cn(styles.forgot_password__expiration, styles.forgot_password__expiration_colored);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit: SubmitHandler<IGeneralInfo> = async (data: IGeneralInfo) => {
    if (emailVerifyCode != null && data.code === emailVerifyCode.code) {
      handleGetData(data);
      handleNextStep();
    } else {
      setError('code', { type: 'manual', message: 'Wrong Code!' });
    }
  };

  const fieldClassNames = cn(styles.forgot_password__field, fieldClassName);
  const buttonClassNames = cn(styles.forgot_password__button, buttonClassName);

  return (
    <div className={styles.forgot_password__main_section}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldClassNames}>
          <input
            type="text"
            value={email}
            readOnly
          />
        </div>
        <div className={fieldClassNames}>
          <span className={`${errors.code && styles.error}`}>{errors.code?.message}</span>
          <input
            {...register('code')}
            type="text"
            placeholder='Verification code'
          />
        </div>
        <div>
          {remainingTime > 0 ? (
            <p className={styles.forgot_password__expiration}><b>CODE</b> expiration time <b>{Math.floor(remainingTime / 60)}:{remainingTime % 60}</b></p>
          ) : (
            <>
              {isValid ? <button className={buttonClassNames} type='submit'>
                <Text className={styles.forgot_password__button_text} weight='medium'>Done</Text>
              </button> : <p className={coloredExpiration}><b>CODE</b> has expired</p>}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordStepTwo;