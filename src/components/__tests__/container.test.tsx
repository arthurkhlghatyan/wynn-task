import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from '@/components/container';

test('Container renders children', () => {
  render(<Container>Hello World!</Container>);
  expect(screen.getByText('Hello World!')).toBeDefined();
});
