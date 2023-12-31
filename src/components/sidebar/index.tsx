import React, { memo, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  DashboardOutlined,
  ReadOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'

import Logo from '../../assets/images/logo.png'
import UserImage from '../../assets/images/adil.jpg'
import { useUser } from '../../hooks'

const { Sider } = Layout

const AppLogo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 7px;
  background-color: #1677ff;
`

const UserInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px 0px;

  & img {
    border-radius: 50%;
    padding-bottom: 10px;
  }

  & span {
    padding: 2px;
  }
`

const siderStyle: any = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  background: 'white',
}

const Sidebar: React.FC = memo(() => {
  const location = useLocation()

  // added useMemo to only generate once
  const userId = useMemo(() => Math.floor(Math.random() * 10) + 1, [])

  const { user } = useUser(Number(userId))

  return (
    <Sider style={siderStyle} width={200}>
      <AppLogo>
        <img width="100" height="50" src={Logo} alt="QDB Logo" />
      </AppLogo>

      <UserInfo>
        <img width={64} src={UserImage} alt="User" />

        <span>Hello</span>
        <p>{user?.name}</p>
        <span>{user?.phone}</span>
        <span>{user?.email}</span>
      </UserInfo>

      <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
        <Menu.Item key="/" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="blogs" icon={<ReadOutlined />}>
          <Link to={`/blogs/${userId}`}>Blogs</Link>
        </Menu.Item>

        <Menu.Item key="profile" icon={<UserOutlined />}>
          <Link to={`/profile/${userId}`}>Profile</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
})

export { Sidebar }
