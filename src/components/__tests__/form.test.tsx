import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form } from '@/components/form'

test('Form renders inputs', () => {
  render(<Form><input type='text' placeholder='Hello World!' /></Form>)

  expect(screen.getByPlaceholderText('Hello World!')).toBeDefined();
})