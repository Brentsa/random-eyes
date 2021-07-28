import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {

  const [formState, setFormState] = useState({ username: '', email: '', address: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = async event => {
    const { name, value } = event.target;

    await setFormState({ ...formState, [name]: value });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    // use try/catch instead of promises to handle errors

    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } 
    catch (e) {
      console.error(e);
    }
  };

  return (
        <div id="sign-up-form-cont" className="sign-up-form">
          
            <form onSubmit={handleFormSubmit} id="sign-up-form" >
              <input className="sign-up-form" 
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your address'
                name='address'
                type='address'
                id='address'
                value={formState.address}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your password'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button type='submit' id="form-submit">
                Submit
              </button>
              {error && <div>Sign up failed</div>}
            </form>
        </div>
  );
};

export default Signup;
