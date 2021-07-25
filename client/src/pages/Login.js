import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState }
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="form-container">
      <h4>Login</h4>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder='Your email'
            name='email'
            type='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
          />
          <input
            placeholder='******'
            name='password'
            type='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
          />
          <button type='submit'>
            Submit
          </button>
          {error && <div>Login failed</div>}
        </form>
      </div>
  );
};
export default Login;