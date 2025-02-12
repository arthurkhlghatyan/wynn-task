import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RadioButton } from '@/components/radio-button'

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

test('Checkbox renders input and label properly', () => {
  const { container } = render(<RadioButton label='Hello World!' />)

  expect(container.querySelector('input[type="radio"]')).toBeDefined();
  expect(screen.getByText('Hello World!')).toBeDefined();
})