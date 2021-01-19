import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  firstName: yup.string().required('Name is empty. Enter your name.'),
  lastName: yup.string().required('Surname is empty. Enter yuor surname.'),
  email: yup.string().email().required('Email is empty. Enter your login.'),
  password: yup
    .string()
    .min(6, 'Password is too short. Min - 6 symbols.')
    .max(15, 'Password is too long. Max - 15 symbol.')
    .required('Password is empty. Enter the password.'),
});

export default registrationSchema;
