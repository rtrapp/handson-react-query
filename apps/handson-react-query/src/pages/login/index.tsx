import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { LoginFormValues } from './services/LoginTypes';
import { ValidateLogin, DoLogin, GetLoginInitialValues } from './services/LoginService';


const Login = () => {
    const [ formError, setFormError ] = useState<string>('');
    const { updateUser } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = (values: LoginFormValues) => {
        console.log("Handling submit");

        DoLogin(values).then((token) => {
          setFormError('');
          updateUser({ username: values.username, token });
          navigate('/');
        }).catch((error) => {
          setFormError(error.message);
        });
    };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl mb-4">Login</h2>
        <Formik
          initialValues={GetLoginInitialValues()}
          onSubmit={handleSubmit}
          validate={ValidateLogin}
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
              {formError && 
                <div className="flex text-center text-red-500 mt-4">
                  {formError}
                </div>
              }
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
