import { vi, expect, test, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { OTPInput } from '@/components/otp-input'

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

test('OTP renders resend link', () => {
  render(<OTPInput name='otp[]' onComplete={() => { }} onResend={() => { }} />)

  expect(screen.getByText('Click to resend')).toBeDefined();
})

test('OTP renders necessary number of inputs', () => {
  const expectedDigits = 4;

  const { container } = render(<OTPInput expectedDigits={expectedDigits} name='otp[]' onComplete={() => { }} onResend={() => { }} />)

  expect(container.querySelectorAll('input[name="otp[]"]').length).toBe(expectedDigits);
})