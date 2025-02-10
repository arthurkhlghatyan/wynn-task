import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BackButton } from '@/components/back-button'

test('BackButton', () => {
  render(<BackButton />)
  expect(screen.getByText('Back')).toBeDefined();
})