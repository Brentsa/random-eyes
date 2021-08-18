import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      width: '30ch',
      margin: '10px 10px'
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(246, 246, 237, 0.8)',
    borderRadius: '10px',
    padding: '10px'
  }
}));

const Login = () => {

  const classes = useStyles();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    
    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
    } 
    catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit} className={classes.root}>
  
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          value={formState.email}
          onChange={handleChange}
        />
    
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          value={formState.password}
          onChange={handleChange}
        />

        <button type='submit' id="log-in-in-put-submit">
          Submit
        </button>
      </form>
      {error && <h3>Login failed :(</h3>}
    </div>
  );
};

export default Login;


