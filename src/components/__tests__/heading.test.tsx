import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from '@/components/heading';

test('Heading', () => {
  render(<Heading>Hello World!</Heading>);
  expect(screen.getByText('Hello World!')).toBeDefined();
});
