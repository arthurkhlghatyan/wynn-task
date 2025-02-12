'use server'

import { z } from 'zod'

const schema = z.object({
  otp: z.number(),
});

export async function verifyOTP(prevState: unknown, formData: FormData) {
  const dictionary = Object.fromEntries(formData.entries());

  const { error } = schema.safeParse(dictionary);

  if (!!error) {
    return error.flatten().fieldErrors
  }

  return {
    errors: null
  }
}