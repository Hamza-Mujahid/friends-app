import React from 'react'
import { Layout } from 'antd';


const SignUp = () => {
    const { Header, Content } = Layout;
    return (
        <div>
           <Layout>
      <Header>  <h1 className = "regHeaderHeading">WELCOME TO FRIENDS APP</h1> <br/> </Header>
      <Content className = "bgColor"><h3>SignUp Form</h3></Content>
    <Footer style={{ textAlign: 'center' }}>Hamza.Io.Developer ©2021 Created by Muhammad Hamza</Footer>
    </Layout>
    <SignupForm/>
        </div>
    )
}

export default SignUp
