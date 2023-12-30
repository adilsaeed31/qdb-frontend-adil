import React, { useEffect, useState, memo } from 'react'
import { Link } from 'react-router-dom'
import { Card, List } from 'antd'
import styled from 'styled-components'

const DashboardWrapper = styled.div`
  padding: 24px;
  background: #fff;
  min-height: 360px;
`

interface User {
  id: number
  name: string
}

interface Post {
  id: number
  title: string
  body: string
}

const Dashboard: React.FC = memo(() => {
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    // Fetch users and posts data from JSONPlaceholder API
    const fetchUserData = async () => {
      const usersResponse = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      )
      const usersData = await usersResponse.json()
      setUsers(usersData)
    }

    const fetchPostData = async () => {
      const postsResponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      )
      const postsData = await postsResponse.json()
      setPosts(postsData)
    }

    fetchUserData()
    fetchPostData()
  }, [])

  return (
    <DashboardWrapper>
      <h1>Welcome to the Dashboard</h1>
      <h2>Users</h2>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <Card title={user.name}>
              <Link to={`/user/${user.id}`}>View Details</Link>
            </Card>
          </List.Item>
        )}
      />
      <h2>Posts</h2>
      <List
        dataSource={posts}
        renderItem={(post) => (
          <List.Item>
            <Card title={post.title}>
              <p>{post.body}</p>
              <Link to={`/post/${post.id}`}>View Details</Link>
            </Card>
          </List.Item>
        )}
      />
    </DashboardWrapper>
  )
})

export { Dashboard }
