import React from 'react'
import { Layout } from 'antd';

const Login = () => {
    const { Header, Content } = Layout;
    return (
        <div>
           <Layout>
      <Header>  <h1 className = "regHeaderHeading">WELCOME TO FRIENDS APP</h1> <br/> </Header>
      <Content className = "bgColor"><h3>Login Form</h3></Content>
    </Layout>
    <Loginform/>
    <Footer style={{ textAlign: 'center' }}>Hamza.Io.Developer ©2021 Created by Muhammad Hamza</Footer>

        </div>
    )
}

export default Login
