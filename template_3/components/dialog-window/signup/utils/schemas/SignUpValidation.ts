import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Wrong format")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is required"),
  lastName: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Wrong format")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is required"),
  dateOfBirth: yup.string().required("Date of Birth is required").matches(/^[A-Za-z0-9@.+_-]+$/, 'Wrong format'),
});