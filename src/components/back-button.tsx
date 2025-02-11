'use client'

import { goBack } from '@/actions/go-back'
import { Button } from './button';

export function BackButton() {
  return (
    <Button variant='outline' type='button' onClick={() => goBack()}>Back</Button>
  )
}