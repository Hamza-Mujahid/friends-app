import React from 'react'
import {
    Form,
    Input,
    Button,
} from 'antd';
// const { Option } = Select;

const SignUpform = () => {

    let SignUpdata = () =>{
        
    }

    return (
        <div>
            
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="username"
                label="Username"
                tooltip="Enter a username for this app?"
                rules={[{ required: true, message: 'Please input your Username!', whitespace: true }]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" onClick={SignUpdata}>
                Sign Up
            </Button>

        </div>
    )
}

export default SignUpform
