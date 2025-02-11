import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from '@/components/input'

test('Input renders properly', () => {
  render(<Input placeholder='Hello World!' />)
  expect(screen.getByPlaceholderText('Hello World!')).toBeDefined();
})