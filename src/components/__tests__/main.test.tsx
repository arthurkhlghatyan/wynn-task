import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Main } from '@/components/main'

test('Main renders children', () => {
  render(<Main>Hello World!</Main>)
  expect(screen.getByText('Hello World!')).toBeDefined();
})