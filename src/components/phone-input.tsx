'use client';

import ReactPhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';

import { Input } from '@/components/input';

export function PhoneInput({
  value,
  onChange,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  // Silence eslint errors
  void value;
  void onChange;

  return (
    <ReactPhoneInput
      onChange={() => {}}
      value={''}
      international
      withCountryCallingCode
      country="AE"
      inputComponent={Input}
      {...rest}
    />
  );
}
