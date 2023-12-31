import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  phone: string
}

const useUser = (userId: number) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`
        )
        const userData: User = await response.json()
        setUser(userData)
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [userId])

  return { user, loading }
}

export { useUser }
