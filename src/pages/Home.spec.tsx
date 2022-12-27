import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from './index.page'

test('Home', () => {
  render(<Home />)

  expect(screen.getByText('Rodrigo Victor')).toBeDefined()
})
