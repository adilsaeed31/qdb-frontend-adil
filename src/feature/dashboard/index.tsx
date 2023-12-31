import React, { memo } from 'react'
import styled from 'styled-components'

const DashboardWrapper = styled.div`
  padding: 24px;
  background: #fff;
  min-height: 360px;
`

const Dashboard: React.FC = memo(() => {
  return (
    <DashboardWrapper>
      <h1>Welcome to the Dashboard</h1>

      <p>Click Profile to view user profile details</p>
      <p>Click Blogs to view posts</p>
    </DashboardWrapper>
  )
})

export { Dashboard }
