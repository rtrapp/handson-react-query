import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';


interface LoginFormValues {
  username: string;
  password: string;
}





const Login = () => {
  
    const { login } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = (values: LoginFormValues) => {
        // TODO: Use API to validate login after implementing it
        login({ username: values.username });
        navigate('/');
    };

    const initialValues: LoginFormValues = {
      username: '',
      password: '',
    }

    const validate = (values: LoginFormValues) => {
      const errors:LoginFormValues = {
        username: '',
        password: '',
      };
      
      if (!values.username) {
        errors.username = 'Required';
      }

      if (!values.username) {
        errors.password = 'Required';
      }
    
      return errors;
    };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl mb-4">Login</h2>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ handleChange, touched, errors }) => (
            <Form>
              <div className="mb-4">
                <Field
                  as={TextField}
                  name="username"
                  label="Username"
                  variant="outlined"
                  error={Boolean(touched.username && errors.username)}
                  helperText={<ErrorMessage name="username" />}
                  fullWidth
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  helperText={<ErrorMessage name="password" />}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
