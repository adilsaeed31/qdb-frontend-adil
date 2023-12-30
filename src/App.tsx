import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'

import { Sidebar } from './components'
import { Dashboard, Blogs, PostDetail, Profile } from './feature'

const { Content } = Layout

const AppWrapper = styled.div`
  display: flex;
`

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />

        <Layout>
          <Content>
            <AppWrapper>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path={`profile/:userId`} element={<Profile />} />
                <Route path={`blogs/:userId`} element={<Blogs />} />
                <Route path="/post/:postId" element={<PostDetail />} />
              </Routes>
            </AppWrapper>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
