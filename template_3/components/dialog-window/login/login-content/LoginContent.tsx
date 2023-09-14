// TODO return user id

import React, { useEffect, useState } from 'react';
import styles from './login-content.module.scss';
import LoginFormSchema from '../utils/schemas/LoginValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '@/components/text';
import { ILogInTemplate } from '../types';
import { fetchSignIn, fetchCheckAuth, useAppDispatch } from '@hosting2023/redux-lib';

interface LoginContentProps {
  handleClick: () => void;
  setCurrentComponent: React.Dispatch<React.SetStateAction<number>>;
}

interface IGeneralInfo {
  emailOrPhone: string;
  password: string;
}

const IInitialState: ILogInTemplate = {
  emailOrPhone: '',
  password: '',
};

const LoginContent: React.FC<LoginContentProps> = ({ setCurrentComponent, handleClick }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<ILogInTemplate>(IInitialState);
  const { register, handleSubmit, formState: { errors } } = useForm<IGeneralInfo>({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema)
  });

  useEffect(() => {
    dispatch(fetchCheckAuth());
  }, []);

  const handleGetData = async (generalData: any) => {
    setData(Object.assign(data, generalData));
    await dispatch(fetchSignIn(generalData));

  };

  const onSubmit: SubmitHandler<IGeneralInfo> = (data: IGeneralInfo) => {
    handleGetData(data)
    handleClick()
  };

  return (
    <div className={styles.login}>
      <Text className={styles.login__title} size='xl' weight='bold'>Log In</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.login__field}>
          <span className={`${errors.emailOrPhone ? styles.error : ''}`}>{errors.emailOrPhone?.message}</span>
          <input
            {...register('emailOrPhone')}
            placeholder='Email or phone number'
          />
        </div>
        <div className={styles.login__field}>
          <span className={`${errors.password ? styles.error : ''}`}>{errors.password?.message}</span>
          <input
            type='password'
            {...register('password')}
            placeholder='Password'
          />
        </div>
        <button className={styles.login__forgot_password} onClick={() => setCurrentComponent(1)} >
          Forgot password?
        </button>
        <button className={styles.login__button} type='submit'>
          <Text className={styles.login__button_text} weight='medium'>
            Next
          </Text>
        </button>
      </form>
    </div>
  );
};

export default LoginContent;