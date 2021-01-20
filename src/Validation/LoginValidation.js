import * as yup from 'yup';

const loginSchema = yup.object().shape({
  login: yup.string().required('Login is empty.'),
  password: yup.string().required('Password is empty.'),
});

export default loginSchema;
