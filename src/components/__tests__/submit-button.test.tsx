import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubmitButton } from '@/components/submit-button'

test('SubmitButton', () => {
  render(<SubmitButton />)
  expect(screen.getByText('Next')).toBeDefined();
})