import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, 'Paasword is too short. Min - 6 symbols')
    .max(12, 'Password is too long. Max - 12 symbols')
    .required('No password')
    .test(err => console.log(err.name)),
});

export default registrationSchema;
