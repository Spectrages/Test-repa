import * as yup from "yup";

const SignUpFormNextStepSchema = yup.object({
  email: yup.string().email('Wrong format').required('Wrong format'),
  mobilePhone: yup
  .string()
  .matches(/^[0-9+]+$/, 'Wrong format')
  .min(9, "Too Short!")
  .max(13, "Too Long!")
  .required('Wrong format'),
  password: yup
    .string()
    .required('Wrong format')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
});

export default SignUpFormNextStepSchema;