import { render, screen, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

// import App from '../App'
import { Sidebar } from '../components'
import { useUser } from '../hooks'

jest.mock('../hooks/useUser') // Mock the useUser hook

describe('Sidebar', () => {
  it('renders user information in sidebar', async () => {
    act(() =>
      (useUser as jest.Mock).mockImplementation((userId) => ({
        user: { id: userId, name: 'John Doe' },
        loading: false,
      }))
    )

    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )

    // Use screen to query elements in the rendered component
    const userNameElement = screen.getByText('John Doe')

    // Assert that the user name is rendered correctly
    expect(userNameElement).toBeInTheDocument()
  })
})
