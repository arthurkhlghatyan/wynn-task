import { vi } from 'vitest';
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WizardHeader } from '@/components/wizard-header'


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


test('WizardHeader renders heading and stepper', () => {
  render(<WizardHeader title='Heading' current={1} total={3} />)
  expect(screen.getByText('Heading')).toBeDefined();
  expect(screen.getByTestId('stepper').textContent).toEqual('Step 1 of 3');
})