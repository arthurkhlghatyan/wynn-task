import { vi, expect, test, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Select } from '@/components/select'

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

afterEach(() => {
  cleanup();
})

const options = [
  {
    value: 'value',
    label: 'label'
  }
];

test('Select renders properly', () => {
  render(<Select placeholder='Hello World!' options={options} />)

  expect(screen.getByPlaceholderText('Hello World!')).toBeDefined();
})

test('Select renders options', () => {
  const { container } = render(<Select placeholder='Hello World!' options={options} />)

  expect(container.querySelector('option')).toBeDefined();
})

