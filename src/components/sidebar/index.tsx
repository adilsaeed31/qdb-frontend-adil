import React, { memo, useMemo } from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import { useUser } from '../../hooks'

const { Sider } = Layout

const Sidebar: React.FC = memo(() => {
  const location = useLocation()

  // added useMemo to only generate once
  const userId = useMemo(() => Math.floor(Math.random() * 10) + 1, [])

  const { user, loading } = useUser(Number(userId))

  return (
    <Sider width={200} theme="dark">
      <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="profile">
          <Link to={`/profile/${userId}`}>Profile</Link>
        </Menu.Item>

        <Menu.Item key="blogs">
          <Link to={`/blogs/${userId}`}>Blogs</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
})

export { Sidebar }
