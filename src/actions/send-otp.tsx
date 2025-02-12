'use server'

import { moveStep } from '@/steps';
import { z } from 'zod'

const schema = z.object({
  verificationMethod: z.enum(['email', 'phone']),
});

export async function sendOTP(formData: FormData) {
  const dictionary = Object.fromEntries(formData.entries());

  const { error } = schema.safeParse(dictionary);

  if (!!error) {
    return error.flatten().fieldErrors
  }

  await moveStep('next');


  return {
    errors: null
  }
}