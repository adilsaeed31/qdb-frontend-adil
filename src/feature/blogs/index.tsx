import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, List } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const DetailWrapper = styled.div`
  padding: 24px;
  background: #fff;
`

interface Post {
  id: number
  title: string
  body: string
}

const Blogs: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPostsData = async () => {
      const postResponse = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/${userId}/posts `
      )
      const postData = await postResponse.json()
      setPosts(postData)
    }

    fetchPostsData()
  }, [posts, userId])

  return (
    <DetailWrapper>
      <h1>All Blog Posts</h1>
      {posts.length > 0 ? (
        <List
          dataSource={posts}
          renderItem={(post) => (
            <List.Item>
              <Card title={post.title}>
                <p>{post.body}</p>
                <Link to={`/post/${post.id}`}>View Post</Link>
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <p>Loading...</p>
      )}
    </DetailWrapper>
  )
}

export { Blogs }
