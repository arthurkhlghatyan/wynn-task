'use client';

import { goBack } from '@/actions/go-back';
import { Button, Props } from './button';

export function BackButton(props: Props) {
  return (
    <Button variant="outline" type="button" onClick={() => goBack()} {...props}>
      Back
    </Button>
  );
}
