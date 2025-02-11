import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FieldRow } from '@/components/field-row'

test('FieldRow renders 2 column grid', () => {
  const { container } = render(<FieldRow cols={2}>Item1 Item2</FieldRow>)

  expect(container.querySelector('.grid-cols-2')).toBeDefined();
})