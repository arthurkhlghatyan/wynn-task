import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stepper } from '@/components/stepper'

test('Stepper', () => {
  render(<Stepper current={1} total={3} />)
  expect(screen.getByTestId('stepper').textContent).toEqual('Step 1 of 3');
})