import styles from './forgotPasswordStepOne.module.scss';
import ForgotPasswordFormSchema from './utils/schemas/forgotPasswordValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Text from '@/components/text';
import { Button } from '@/components/button';
import { useTranslation } from 'next-i18next';

interface ForgotPasswordStepOneProps {
  handleNextStep: (email: string) => void;
  fieldClassName?: string;
  buttonClassName?: string;
  handleGetData: (generalData: any) => void;
}

interface IGeneralInfo {
  email: string
}

const ForgotPasswordStepOne: React.FC<ForgotPasswordStepOneProps> = ({ handleNextStep, fieldClassName, buttonClassName, handleGetData }) => {
  const { t } = useTranslation(["auth", "common"]);
  const { register, handleSubmit, formState: { errors } } = useForm<IGeneralInfo>({
    mode: 'onChange',
    resolver: yupResolver(ForgotPasswordFormSchema)
  });

  const onSubmit: SubmitHandler<IGeneralInfo> = async (data: IGeneralInfo) => {
    handleNextStep(data.email);
    handleGetData(data);
  };

  const fieldClassNames = cn(styles.forgot_password__field, fieldClassName);
  const buttonClassNames = cn(styles.forgot_password__button, buttonClassName);

  return (
    <div className={styles.forgot_password__main_section}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={fieldClassNames}>
            <span className={`${errors.email ? styles.error : ''}`}>
              {t("wrong_format")}
            </span>
            <input
              type="text"
              {...register('email')}
              placeholder={`${errors.email ? '' : t("enter_email")}`}
            />
          </div>
          <Button className={buttonClassNames} type='submit'>
            <Text className={styles.forgot_password__button_text} transform='uppercase'>
              {t("send_btn", { ns: "common" })}
            </Text>
          </Button>
        </form>
    </div>
  );
};

export default ForgotPasswordStepOne;