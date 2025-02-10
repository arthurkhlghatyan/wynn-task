'use client'

import { goBack } from '@/actions/go-back'

export function BackButton() {
  return (
    <button type='button' onClick={() => goBack()}>Back</button>
  )
}