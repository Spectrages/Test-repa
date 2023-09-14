import styles from './next-step.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '@/components/text';
import SignUpFormNextStepSchema from '../utils/schemas/SignUpNextStepValidation';

interface ISecondSignUpStepProps {
  handleClick: () => void;
  handleGetData: (generalData: any) => void;
}

interface IGeneralInfo {
  email: string;
  mobilePhone: string;
  password: string;
}

const SecondSignUpStep: React.FC<ISecondSignUpStepProps> = ({ handleClick, handleGetData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IGeneralInfo>({
    mode: 'onChange',
    resolver: yupResolver(SignUpFormNextStepSchema)
  });

  const onSubmit: SubmitHandler<IGeneralInfo> = (data: IGeneralInfo) => {
    handleGetData(data)
    handleClick();
  };

  return (
    <div className={styles.sign_up}>
      <Text className={styles.sign_up__title} size='xl' weight='bold'>Sign Up</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.sign_up__field}>
          <span className={`${errors.email ? styles.error : ''}`}>{errors.email?.message}</span>
          <input
            {...register('email')}
            placeholder='Email'
          />
        </div>
        <div className={styles.sign_up__field}>
          <span className={`${errors.mobilePhone ? styles.error : ''}`}>{errors.mobilePhone?.message}</span>
          <input
            {...register('mobilePhone')}
            placeholder='Mobile phone'
          />
        </div>
        <div className={styles.sign_up__field}>
          <span className={`${errors.password ? styles.error : ''}`}>{errors.password?.message}</span>
          <input
            type='password'
            {...register('password')}
            placeholder='Password'
          />
        </div>
        <button className={styles.sign_up__button} type='submit'>
          <Text weight='medium' className={styles.sign_up__button_text}>
            Send
          </Text>
        </button>
      </form>
    </div>
  );
};

export default SecondSignUpStep;