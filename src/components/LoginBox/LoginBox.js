// import { Form, Input, Checkbox } from 'antd';
// import Button from '../button/Button';

// const LoginBox = () => {
//   const onFinish = () => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = () => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <Form
//       name="basic"
//       labelCol={{ span: 8 }}
//       wrapperCol={{ span: 16 }}
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[{ required: true, message: 'Please input your username!' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button />
//       </Form.Item>
//     </Form>
//   );
// };

// ReactDOM.render(<LoginBox />, mountNode);

// export default LoginBox;

import React from 'react'

const LoginBox = () => {
    return (
        <div>
            Hello login
        </div>
    )
}

export default LoginBox
