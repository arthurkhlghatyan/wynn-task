import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BackButton } from '@/components/back-button'

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

test('BackButton', () => {
  render(<BackButton />)
  expect(screen.getByText('Back')).toBeDefined();
})