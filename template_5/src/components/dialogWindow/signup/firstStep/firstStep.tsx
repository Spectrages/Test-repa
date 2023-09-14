import styles from './firstStep.module.scss';
import React, { useState } from 'react';
import { validationSchema } from '../utils/schemas/signUpFirstStepValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '@/components/text';

import { DatePickerInput } from '@/components/datePickerInput';
import { Button } from '@/components/button';
import { useTranslation } from 'next-i18next';

interface IFirstSignUpStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleGetData: (generalData: any) => void;
}

interface IGeneralInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

const FirstSignUpStep: React.FC<IFirstSignUpStepProps> = ({ setCurrentStep, handleGetData }) => {
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const { t } = useTranslation(["auth", "common"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<IGeneralInfo>({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: dateOfBirth
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleDatePicker = (newDate: string) => {
    setDateOfBirth(newDate);
    setValue('dateOfBirth', newDate);
  };

  const onSubmit: SubmitHandler<IGeneralInfo> = (data: IGeneralInfo) => {
    handleGetData(data)
    setCurrentStep(1);
  };

  return (
        <div>
          <Text className={styles.title} weight='bold' align='center' transform='uppercase'>
            {t("signup")}
          </Text>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field}>
              <span className={`${errors.firstName && styles.error}`}>
                {t("wrong_format")}
              </span>
              <input {...register("firstName")} placeholder= {t("firstname")} />
            </div>
            <div className={styles.field}>
              <span className={`${errors.lastName && styles.error}`}>
                {t("wrong_format")}
              </span>
              <input {...register("lastName")} placeholder={t("lastname")}  />
            </div>
            <div className={styles.field}>
              <span className={`${errors.dateOfBirth && styles.error}`}>
                {t("wrong_format")}
              </span>
              <DatePickerInput
                caption="Date of birth"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={handleDatePicker}
              />
            </div>
            <Button className={styles.button} type="submit">
              <Text className={styles.button_text} transform='uppercase'>
                {t("next_btn", { ns: "common" })}
              </Text>
            </Button>
          </form>
        </div>
  );
};

export default FirstSignUpStep;