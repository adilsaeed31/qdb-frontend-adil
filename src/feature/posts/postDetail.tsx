// PostDetail.tsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'antd'
import styled from 'styled-components'

const PostWrapper = styled.div`
  padding: 24px;
  background: #fff;
`

interface Post {
  id: number
  title: string
  body: string
}

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>()
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    const fetchPostData = async () => {
      const postResponse = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`
      )
      const postData = await postResponse.json()
      setPost(postData)
    }

    fetchPostData()
  }, [postId])

  return (
    <PostWrapper>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </PostWrapper>
  )
}

export { PostDetail }
