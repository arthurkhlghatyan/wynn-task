import { afterEach, expect, test, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Button } from '@/components/button'


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
});

test('Button renders properly', () => {
  render(<Button>Hello World</Button>)
  expect(screen.getByText('Hello World')).toBeDefined();
})

test('Button onClick works', () => {
  const handleClick = vi.fn();

  render(<Button onClick={handleClick}>Hello World</Button>)

  const button = screen.getByText('Hello World');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
})