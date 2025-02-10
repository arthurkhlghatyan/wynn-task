'use server'

import { moveStep } from '@/steps';
import { z } from 'zod'

const schema = z.object({
  verificationMethod: z.enum(['email', 'phone']),
});

export async function sendOTP(formData: FormData) {
  await moveStep('next');
}