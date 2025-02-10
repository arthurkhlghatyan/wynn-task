'use server'


import { z } from 'zod'
import { moveStep } from '../steps'

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

export async function createUser(formData: FormData) {
  await moveStep('next');
}