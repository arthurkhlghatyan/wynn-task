'use client'

import ReactPhoneInput from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'

import { Input } from '@/components/input';

export function PhoneInput({ value, onChange, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <ReactPhoneInput
      onChange={() => { }}
      value={""}

      international
      withCountryCallingCode

      country='AE'
      inputComponent={Input}

      {...rest}
    />
  )
}