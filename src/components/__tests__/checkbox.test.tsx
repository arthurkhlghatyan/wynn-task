import { vi, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { Checkbox } from '@/components/checkbox'

test('Checkbox renders input and label properly', () => {
  const { container } = render(<Checkbox>Hello World!</Checkbox>)

  expect(container.querySelector('input[type="checkbox"]')).toBeDefined();
  expect(container.querySelector('label')).toBeDefined();
})