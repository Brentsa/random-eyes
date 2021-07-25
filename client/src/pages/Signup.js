import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import { Form, Input, Button, Checkbox } from 'antd';

// const Signup = () => {
//   const [formState, setFormState] = useState({ username: '', email: '', password: '', address: '' });
//   const [addUser, { error }] = useMutation(ADD_USER);
//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };
//   // submit form
//   const handleFormSubmit = async event => {
//     event.preventDefault();
//     // use try/catch instead of promises to handle errors
//     try {
//       const { data } = await addUser({
//         variables: { ...formState }
//       });
//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   return (
//         <div className="form-container">
//           <h4>Sign Up</h4>
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 placeholder='Your username'
//                 name='username'
//                 type='username'
//                 id='username'
//                 value={formState.username}
//                 onChange={handleChange}
//               />
//               <input
//                 placeholder='Your email'
//                 name='email'
//                 type='email'
//                 id='email'
//                 value={formState.email}
//                 onChange={handleChange}
//               />
//               <input
//                 placeholder='*****'
//                 name='password'
//                 type='password'
//                 id='password'
//                 value={formState.password}
//                 onChange={handleChange}
//               />
//               <input
//                 placeholder='Your address'
//                 name='address'
//                 type='address'
//                 id='address'
//                 value={formState.address}
//                 onChange={handleChange}
//               />
//               <button type='submit'>
//                 Submit
//               </button>
//               {error && <div>Sign up failed</div>}
//             </form>
//         </div>
//   );
// };

function Signup(){

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;