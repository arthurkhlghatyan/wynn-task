'use server'

import { z } from 'zod'

const schema = z.object({
  verificationMethod: z.enum(['email', 'phone']),
});

export async function sendOTP(formData: FormData) {
  // Fetch contact information
  // Send user an OTP
}