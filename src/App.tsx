import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'

import { Sidebar } from './components'
import { Dashboard, Blogs, PostDetail, Profile } from './feature'

const { Content, Header } = Layout

const AppLayout = styled(Layout)`
  min-height: 100vh;
`

const AppContentLayout = styled(Layout)`
  margin-left: 200px;
  width: 100%;
`

const AppHeader = styled(Header)`
  position: fixed;
  width: 100%;
  z-index: 1;
`

const AppContent = styled(Content)`
  margin-top: 30px;
`

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Sidebar />

        <AppContentLayout>
          <AppHeader />

          <AppContent>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path={`profile/:userId`} element={<Profile />} />
              <Route path={`blogs/:userId`} element={<Blogs />} />
              <Route path="/post/:postId" element={<PostDetail />} />
            </Routes>
          </AppContent>
        </AppContentLayout>
      </AppLayout>
    </Router>
  )
}

export default App
