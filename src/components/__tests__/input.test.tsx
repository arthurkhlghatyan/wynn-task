import { vi, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from '@/components/input'

vi.mock("next/font/google", () => ({
  Sen: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
  Libre_Caslon_Text: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
}));

test('Input renders properly', () => {
  render(<Input placeholder='Hello World!' />)
  expect(screen.getByPlaceholderText('Hello World!')).toBeDefined();
})