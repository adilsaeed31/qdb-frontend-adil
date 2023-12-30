import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { useUser } from '../../hooks'

const ProfileWrapper = styled.div`
  padding: 24px;
  background: #fff;
`

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()
  const { user } = useUser(Number(userId))

  return (
    <ProfileWrapper>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ProfileWrapper>
  )
}

export { Profile }
