import * as yup from "yup";

const ForgotPasswordFormSchema = yup.object({
  email: yup.string().email().required('Wrong format'),
});

export default ForgotPasswordFormSchema;