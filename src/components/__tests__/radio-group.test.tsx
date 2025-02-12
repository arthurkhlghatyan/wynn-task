import { expect, test, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { RadioGroup, Option } from '@/components/radio-group'

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

const verificationOptions: Option[] = [
  {
    value: 'phone',
    label: 'Send to Phone'
  },
  {
    value: 'email',
    label: 'Send to Email'
  }
];

afterEach(() => {
  cleanup();
})

test("RadioGroup renders all options", () => {
  render(<RadioGroup name="verificationMethod" options={verificationOptions} />);

  verificationOptions.forEach((option) => {
    expect(screen.getByLabelText(option.label)).toBeDefined();
  });
});

test("RadioGroup selects correct radio button based on defaultValue", () => {
  render(<RadioGroup name="verificationMethod" options={verificationOptions} defaultValue='phone' />);

  const selectedRadio = screen.getByLabelText("Send to Phone") as HTMLInputElement;
  expect(selectedRadio.checked).toBe(true);
});