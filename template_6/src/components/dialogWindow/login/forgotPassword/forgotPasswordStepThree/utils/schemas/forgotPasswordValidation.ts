import * as yup from "yup";

const ForgotPasswordFormSchema = yup.object({
  newPassword: yup
    .string()
    .required('Wrong format')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
  repeatPassword: yup
    .string()
    .required('Wrong format')
    .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
});

export default ForgotPasswordFormSchema;