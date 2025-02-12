import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { FieldRow } from '@/components/field-row'

test('FieldRow renders 2 column grid', () => {
  const { container } = render(<FieldRow>Item1 Item2</FieldRow>)

  expect(container.querySelector('.sm\\:grid-cols-2')).toBeDefined();
})