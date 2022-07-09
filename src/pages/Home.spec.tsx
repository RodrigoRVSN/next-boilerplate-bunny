import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './index'

test('Home', () => {
  render(<Home />)
  
  expect(screen.getByText('Rodrigo Victor')).toBeDefined()
})
