import React from 'react'
import { Layout } from 'antd';

const Settings = () => {
    const { Header, Footer, Content } = Layout;
    return (
        <div>
             <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2"><Link to = './settings'><SettingOutlined /></Link></Menu.Item>
      </Menu>
    </Header>
    <Content className="profile">
    <Profile className="profile" />
   
    </Content>
    <Post/>

    
    <Footer style={{ textAlign: 'center' }}>Hamza.Io.Developer ©2021 Created by Muhammad Hamza</Footer>

  </Layout>
        </div>
    )
}

export default Settings
