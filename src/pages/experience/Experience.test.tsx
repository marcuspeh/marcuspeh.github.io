import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from './Experience';

test('renders learn react link', () => {
  render(<Experience />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
