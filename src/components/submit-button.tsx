'use client';

import { useFormStatus } from 'react-dom';

import { Button, Props } from './button';

export function SubmitButton(props: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} {...props}>
      Next
    </Button>
  );
}
