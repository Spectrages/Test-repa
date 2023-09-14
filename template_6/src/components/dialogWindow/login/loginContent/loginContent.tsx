import React, { useEffect, useState } from 'react';
import styles from './loginContent.module.scss';
import LoginFormSchema from '../utils/schemas/loginValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '@/components/text';
import { ILogInTemplate } from '../types';
import { fetchSignIn, fetchCheckAuth, useAppDispatch } from '@hosting2023/redux-lib';
import { Button } from '@/components/button';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation(["auth", "common"]);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<ILogInTemplate>(IInitialState);
  const { register, handleSubmit, formState: { errors } } = useForm<IGeneralInfo>({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema)
  });

  useEffect(() => {
    dispatch(fetchCheckAuth());
  }, [dispatch]);

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
      <Text className={styles.login__title} weight='semiBold' align='center'>
        {t("signin")}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.login__field}>
          <span className={`${errors.emailOrPhone ? styles.error : ''}`}>
            {t("wrong_format")}
          </span>
          <input
            {...register('emailOrPhone')}
            placeholder={t("email_or_phone")}
          />
        </div>
        <div className={styles.login__field}>
          <span className={`${errors.password ? styles.error : ''}`}>
            {t("wrong_format")}
          </span>
          <input
            type='password'
            {...register('password')}
            placeholder={t("pass")}
          />
        </div>
        <button className={styles.login__forgot_password} onClick={() => setCurrentComponent(1)} >
          {t("forgot_password_question")}
        </button>
        <Button className={styles.login__button} type='submit'>
          <Text className={styles.login__button_text} transform='uppercase' color='white' size='sm' weight='medium'>
            {t("signin")}
          </Text>
        </Button>
      </form>
    </div>
  );
};

export default LoginContent;