import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form, Input, Space } from 'antd'
import styled from 'styled-components'

import { usePost } from '../../hooks'

const DetailWrapper = styled.div`
  padding: 24px;
  background: #fff;
`

const PostWrapper = styled.div`
  margin-top: 24px;
`

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>()
  const { post, loading, updatePost } = usePost(Number(postId))

  const [editing, setEditing] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      title: post?.title,
      body: post?.body,
    })
  }, [post, form])

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleCancelEdit = () => {
    setEditing(false)
  }

  const handleFormSubmit = (values: any) => {
    updatePost(Number(postId), values.title, values.body)
    setEditing(false)
  }

  return (
    <DetailWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <PostWrapper>
          <img src="https://picsum.photos/500/300" alt={post.title} />

          <h1>{post.title}</h1>

          <p>{post.body}</p>

          {!editing ? (
            <Space>
              <Button type="primary" onClick={handleEditClick}>
                Edit
              </Button>

              <Button type="primary" danger>
                Delete
              </Button>
            </Space>
          ) : (
            <Form
              form={form}
              onFinish={handleFormSubmit}
              initialValues={{ title: post.title, body: post.body }}
            >
              <Form.Item name="title" label="Title">
                <Input />
              </Form.Item>
              <Form.Item name="body" label="Body">
                <Input.TextArea />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button onClick={handleCancelEdit}>Cancel</Button>
            </Form>
          )}
        </PostWrapper>
      ) : (
        <p>Post not found</p>
      )}
    </DetailWrapper>
  )
}

export { PostDetail }
