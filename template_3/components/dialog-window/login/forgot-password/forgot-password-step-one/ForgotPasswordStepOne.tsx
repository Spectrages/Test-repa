import styles from './forgot-password-step-one.module.scss';
import ForgotPasswordFormSchema from './utils/schemas/ForgotPasswordValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Text from '@/components/text';
// import { fetchEmailVerification, fetchCheckAuth, useAppDispatch } from '@hosting2023/redux-lib';

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
  // const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<IGeneralInfo>({
    mode: 'onChange',
    resolver: yupResolver(ForgotPasswordFormSchema)
  });

  const onSubmit: SubmitHandler<IGeneralInfo> = async (data: IGeneralInfo) => {
    handleNextStep(data.email);
    handleGetData(data);
    // await dispatch(fetchEmailVerification(data));
  };

  const fieldClassNames = cn(styles.forgot_password__field, fieldClassName);
  const buttonClassNames = cn(styles.forgot_password__button, buttonClassName);

  return (
    <div className={styles.forgot_password__main_section}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={fieldClassNames}>
            <span className={`${errors.email ? styles.error : ''}`}>{errors.email?.message}</span>
            <input
              type="text"
              {...register('email')}
              placeholder={`${errors.email ? '' : 'Please enter email you registered with'}`}
            />
          </div>
          <button className={buttonClassNames} type='submit'>
            <Text className={styles.forgot_password__button_text} weight='medium'>Next</Text>
          </button>
        </form>
    </div>
  );
};

export default ForgotPasswordStepOne;