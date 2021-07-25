import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '', address: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
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
    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
        <div className="form-container">
          <h4>Sign Up</h4>
            <form onSubmit={handleFormSubmit}>
              <input
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                placeholder='*****'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <input
                placeholder='Your address'
                name='address'
                type='address'
                id='address'
                value={formState.address}
                onChange={handleChange}
              />
              <button type='submit'>
                Submit
              </button>
              {error && <div>Sign up failed</div>}
            </form>
        </div>
  );
};
export default Signup;