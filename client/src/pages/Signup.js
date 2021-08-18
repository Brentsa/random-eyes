import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    borderTop: 'solid 2px black'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submitSection:{
    marginTop: '20px',
    borderTop: 'solid 2px black',
    paddingTop: '20px'
  },
  titleSection:{
    marginTop: '20px',
    marginBottom: '8px',
  }
}));

const Signup = () => {

  const classes = useStyles();

  const [formState, setFormState] = useState({ username: '', email: '', address:{ streetNumber: '', streetName: '', city: '', province: '', country: '', postalCode: ''} , password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = async event => {
    const { name, value } = event.target;

    if(name in formState.address){
      return await setFormState({...formState, address: {...formState.address, [name]: value}});
    }
    
    return await setFormState({ ...formState, [name]: value });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    // use try/catch instead of promises to handle errors

    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState, address: {...formState.address, streetNumber: parseInt(formState.address.streetNumber)} }
      });

      Auth.login(data.addUser.token);
    } 
    catch (e) {
      console.error(e);
    }
  };

  return (
        <div id="sign-up-form-cont" className="sign-up-form">
            <form onSubmit={handleFormSubmit} /*id="sign-up-form"*/ className={classes.root}>
              {/* <input className="sign-up-form" 
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
                placeholder='Your Street Number'
                type='number'
                name='streetNumber'
                id='address'
                value={formState.address.streetNumber}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your Street Name'
                name='streetName'
                id='address'
                value={formState.address.streetName}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your City'
                name='city'
                id='address'
                value={formState.address.city}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your Province/State'
                name='province'
                id='address'
                value={formState.address.province}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your Country'
                name='country'
                id='address'
                value={formState.address.country}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your Postal/Zip Code'
                name='postalCode'
                id='address'
                value={formState.address.postalCode}
                onChange={handleChange}
              />
              <input className="sign-up-form"
                placeholder='Your password'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              /> */}

              <h3 className={classes.titleSection}>Login Details</h3>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Username"
                  name="username"
                  variant="outlined"
                  value={formState.username}
                  onChange={handleChange}
                />

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
              </div>

              <h3 className={classes.titleSection}>Address</h3>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Street Number"
                  name="streetNumber"
                  variant="outlined"
                  type="number"
                  value={formState.address.streetNumber}
                  onChange={handleChange}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Street Name"
                  name="streetName"
                  variant="outlined"
                  value={formState.address.streetName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="City"
                  name="city"
                  variant="outlined"
                  value={formState.address.city}
                  onChange={handleChange}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Province/State"
                  name="province"
                  variant="outlined"
                  value={formState.address.province}
                  onChange={handleChange}
                />
              </div>

              <div>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="country"
                    value={formState.address.country}
                    onChange={handleChange}
                    label="country"
                  >
                    {/* <MenuItem value="">
                      <em>None</em>
                    </MenuItem> */}
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  required
                  id="outlined-required"
                  label="Postal/Zip Code"
                  name="postalCode"
                  variant="outlined"
                  value={formState.address.postalCode}
                  onChange={handleChange}
                />

              </div>
              
              <div className={classes.submitSection}>
                <button type='submit' id="form-submit">
                  Submit
                </button>
                {error && <div>Sign up failed</div>}
              </div>
            </form>
        </div>
  );
};

export default Signup;
