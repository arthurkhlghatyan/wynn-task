'use server';

import { moveStep } from '@/steps';
import { z } from 'zod';

const schema = z.object({
  verificationMethod: z.enum(['email', 'phone']),
});

/**
 * TODO:
 * 1. Submit previously saved user data + verification method to POST /users endpoint. 
 * This creates unverified user and sends OTP through users preferred channel
 */
export async function sendOTP(prevState: unknown, formData: FormData) {
  const dictionary = Object.fromEntries(formData.entries());

  const { error } = schema.safeParse(dictionary);

  if (!!error) {
    return error.flatten().fieldErrors;
  }

  await moveStep('next');

  return {
    errors: null,
  };
}
