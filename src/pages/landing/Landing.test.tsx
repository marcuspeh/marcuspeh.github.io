import { render, screen } from '@testing-library/react'
import Landing from './Landing'

test('renders intro', () => {
  render(<Landing />)
  const linkElement = screen.getByText(/Hey, I’m Marcus👋/i)
  expect(linkElement).toBeInTheDocument()
})
