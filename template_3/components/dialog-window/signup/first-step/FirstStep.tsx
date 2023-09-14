
import styles from './first-step.module.scss';
import React, { useState } from 'react';
import { validationSchema } from '../utils/schemas/SignUpValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '@/components/text';

import { DatePickerInput } from '@/components/datePickerInput';

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
          <Text className={styles.title} size='xl' weight='bold'>Sign Up</Text>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field}>
              <span className={`${errors.firstName && styles.error}`}>
                {errors.firstName?.message}
              </span>
              <input {...register("firstName")} placeholder="firstName" />
            </div>
            <div className={styles.field}>
              <span className={`${errors.lastName && styles.error}`}>
                {errors.lastName?.message}
              </span>
              <input {...register("lastName")} placeholder="LastName" />
            </div>
            <div className={styles.field}>
              <span className={`${errors.dateOfBirth && styles.error}`}>
                {errors.dateOfBirth?.message}
              </span>
              <DatePickerInput
                // {...register("dateOfBirth")}
                caption="Date of birth"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={handleDatePicker}
              />
            </div>
            <button className={styles.button} type="submit">
              <Text className={styles.button_text} weight='medium'>Next</Text>
            </button>
          </form>
        </div>
  );
};

export default FirstSignUpStep;