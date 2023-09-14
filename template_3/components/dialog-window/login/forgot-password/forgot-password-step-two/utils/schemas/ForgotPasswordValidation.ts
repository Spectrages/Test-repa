import * as yup from "yup";

const ForgotPasswordFormSchema = yup.object({
  code: yup
    .string()
    .required('Wrong format')
    .matches(/^\d{6}$/, 'Must be a 6-digit number')
});

export default ForgotPasswordFormSchema;