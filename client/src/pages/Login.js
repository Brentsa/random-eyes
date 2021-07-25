import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import { Form, Input, Button } from 'antd';

// const Login = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN_USER);
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
//     try {
//       const { data } = await login({
//         variables: { ...formState }
//       });
//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   return (
//     <div className="form-container">
//       <h4>Login</h4>
//         <form onSubmit={handleFormSubmit}>
//           <input
//             placeholder='Your email'
//             name='email'
//             type='email'
//             id='email'
//             value={formState.email}
//             onChange={handleChange}
//           />
//           <input
//             placeholder='******'
//             name='password'
//             type='password'
//             id='password'
//             value={formState.password}
//             onChange={handleChange}
//           />
//           <button type='submit'>
//             Submit
//           </button>
//           {error && <div>Login failed</div>}
//         </form>
//       </div>
//   );
// };
// export default Login;

function Login() 
{
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error }] = useMutation(LOGIN_USER);

  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // // submit form
  // const handleFormSubmit = async event => {
  //   event.preventDefault();
  //   try {
  //     const { data } = await login({
  //       variables: { ...formState }
  //     });
  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

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
}

export default Login;