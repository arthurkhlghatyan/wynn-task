import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AuthWizardStage } from '@/components/auth-wizard-stage';

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

test('AuthWizardStage renders title, description and content', () => {
  render(
    <AuthWizardStage title="title" description="description">
      Content
    </AuthWizardStage>
  );

  expect(screen.getByText('title')).toBeDefined();
  expect(screen.getByText('description')).toBeDefined();
  expect(screen.getByText('Content')).toBeDefined();
});
