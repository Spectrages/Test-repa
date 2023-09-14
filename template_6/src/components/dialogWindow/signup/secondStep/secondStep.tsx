import styles from './secondStep.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '@/components/text';
import SignUpFormNextStepSchema from '../utils/schemas/signUpSecondStepValidation';
import { Button } from '@/components/button';
import Image from 'next/image';
import PreviusStepArrowIcon from '@/public/icons/modal_arrow.svg'
import { useTranslation } from 'next-i18next';

interface ISecondSignUpStepProps {
  handleClick: () => void;
  handleGetData: (generalData: any) => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

interface IGeneralInfo {
  email: string;
  mobilePhone: string;
  password: string;
}

const SecondSignUpStep: React.FC<ISecondSignUpStepProps> = ({ handleClick, handleGetData, setCurrentStep }) => {
  const { t } = useTranslation(["auth", "common"]);
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
      <button className={styles.sign_up__previus_step} onClick={() => setCurrentStep(0)}>
        <Image src={PreviusStepArrowIcon} alt='previus step arrow' />
      </button>
      <Text className={styles.sign_up__title} weight='semiBold' align='center'>
        {t("verification")}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.sign_up__field}>
          <span className={`${errors.email ? styles.error : ''}`}>
            {t("wrong_format")}
          </span>
          <input
            {...register('email')}
            placeholder={t("email")}
          />
        </div>
        <div className={styles.sign_up__field}>
          <span className={`${errors.mobilePhone ? styles.error : ''}`}>
            {t("wrong_format")}
          </span>
          <input
            {...register('mobilePhone')}
            placeholder={t("mobile_phone")}
          />
        </div>
        <div className={styles.sign_up__field}>
          <span className={`${errors.password ? styles.error : ''}`}>
            {t("wrong_format")}
          </span>
          <input
            type='password'
            {...register('password')}
            placeholder={t("pass")}
          />
        </div>
        <Button className={styles.sign_up__button} type='submit'>
          <Text className={styles.sign_up__button_text} transform='uppercase' color='white' size='sm' weight='medium'>
            {t("send_btn", { ns: "common" })}
          </Text>
        </Button>
      </form>
    </div>
  );
};

export default SecondSignUpStep;