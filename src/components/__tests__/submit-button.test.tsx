import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SubmitButton } from '@/components/submit-button';

vi.mock('next/font/google', () => ({
  Sen: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  Libre_Caslon_Text: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));

test('SubmitButton', () => {
  render(<SubmitButton />);
  expect(screen.getByText('Next')).toBeDefined();
});
