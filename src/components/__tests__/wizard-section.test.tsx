import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WizardSection } from '@/components/wizard-section';

test('WizardSection renders title and content', () => {
  render(<WizardSection title="Section title">Content</WizardSection>);
  expect(screen.getByText('Section title')).toBeDefined();
  expect(screen.getByText('Content')).toBeDefined();
});
