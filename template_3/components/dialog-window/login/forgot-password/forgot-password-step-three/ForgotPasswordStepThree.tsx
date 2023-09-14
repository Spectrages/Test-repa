import React from 'react';
import styles from './forgot-password-step-three.module.scss';
import ForgotPasswordFormSchema from './utils/schemas/ForgotPasswordValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Text from '@/components/text';

interface ForgotPasswordStepThreeProps {
  handleNextStep: () => void;
  fieldClassName?: string;
  buttonClassName?: string;
  handleGetData: (generalData: any) => void;
}

interface IGeneralInfo {
  newPassword: string;
  repeatPassword: string;
}

const ForgotPasswordStepThree: React.FC<ForgotPasswordStepThreeProps> = ({ handleNextStep, fieldClassName, buttonClassName, handleGetData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IGeneralInfo>({
    mode: 'onChange',
    resolver: yupResolver(ForgotPasswordFormSchema)
  });

  const onSubmit: SubmitHandler<IGeneralInfo> = (data: IGeneralInfo) => {
    handleGetData(data);
    handleNextStep();
  };

  const fieldClassNames = cn(styles.forgot_password__field, fieldClassName);
  const buttonClassNames = cn(styles.forgot_password__button, buttonClassName);

  return (
    <div className={styles.forgot_password__main_section}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldClassNames}>
          <span className={`${errors.newPassword ? '' : ''}`}>{errors.newPassword?.message}</span>
          <input
            type="password"
            {...register('newPassword')}
            placeholder='New password'
          />
        </div>
        <div className={fieldClassNames}>
          <span className={`${errors.repeatPassword ? '' : ''}`}>{errors.repeatPassword?.message}</span>
          <input
            type="password"
            {...register('repeatPassword')}
            placeholder='Repeat new password'
          />
        </div>
        <button className={buttonClassNames} type='submit'>
          <Text className={styles.forgot_password__button_text} weight='medium'>Send</Text>
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordStepThree;