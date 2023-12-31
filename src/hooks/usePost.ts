import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
}

const usePost = (postId: number) => {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`
        )
        const postData: Post = await response.json()
        setPost(postData)
      } catch (error) {
        console.error('Error fetching post data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPostData()
  }, [postId])

  const updatePost = async (postId: number, title: string, body: string) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        }
      )
      const updatedPost: Post = await response.json()
      setPost(updatedPost)
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }

  return { post, loading, updatePost }
}

export { usePost }
