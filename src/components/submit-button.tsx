'use client'

import { useFormStatus } from 'react-dom'

import { Button } from './button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' className='group-invalid:pointer-events-none group-invalid:opacity-30' disabled={pending}>Next</Button>
  )
}