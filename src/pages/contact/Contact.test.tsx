import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

test('renders contact form', () => {
  render(<Contact />)
  const linkElement = screen.getByText(/Let's start a conversation/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders name', () => {
  render(<Contact />)
  const linkElement = screen.getByText(/Marcus Peh/i)
  expect(linkElement).toBeInTheDocument()
})
