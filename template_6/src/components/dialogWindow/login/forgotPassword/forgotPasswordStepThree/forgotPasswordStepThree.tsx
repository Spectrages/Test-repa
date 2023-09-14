import React from 'react';
import styles from './forgotPasswordStepThree.module.scss';
import ForgotPasswordFormSchema from './utils/schemas/forgotPasswordValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Text from '@/components/text';
import { Button } from '@/components/button';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation(["auth", "common"]);
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
          <span className={`${errors.newPassword && styles.error}`}>
            {t("wrong_format")}
          </span>
          <input
            type="password"
            {...register('newPassword')}
            placeholder={t("new_pass")}
          />
        </div>
        <div className={fieldClassNames}>
          <span className={`${errors.repeatPassword && styles.error}`}>
            {t("wrong_format")}
          </span>
          <input
            type="password"
            {...register('repeatPassword')}
            placeholder={t("repeat_new_pass")}
          />
        </div>
        <Button className={buttonClassNames} type='submit'>
          <Text className={styles.forgot_password__button_text} transform='uppercase' color='white' size='sm' weight='medium'>
            {t("done_btn", { ns: "common" })}
          </Text>
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordStepThree;