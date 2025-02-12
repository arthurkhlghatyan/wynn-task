import { afterEach, expect, test } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { Field } from '@/components/field';

afterEach(() => {
  cleanup();
});

test('Fild renders label and content', () => {
  render(
    <Field label="Name" id="name">
      Hello World!
    </Field>
  );

  expect(screen.getByText('Name')).toBeDefined();
  expect(screen.getByText('Hello World!')).toBeDefined();
});

test('Fild displays asterisk when required', () => {
  render(
    <Field label="Name" id="name" required>
      Hello World!
    </Field>
  );

  expect(
    within(screen.getByTestId('field-label')).getByText('*')
  ).toBeDefined();
});
