'use server';

import { z } from 'zod';
import { moveStep } from '../steps';

const schema = z.object({
  // Personal information
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(['male', 'female']),
  residenceCountry: z.string(),

  // Contact information
  email: z.string().email(),
  phoneNumber: z.string(),
});

export async function createUser(_prevState: unknown, formData: FormData) {
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
