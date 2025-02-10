'use server'

import { z } from 'zod'

const schema = z.object({
  otp: z.number(),
});

export async function verifyOTP(formData: FormData) {
  // Fetch contact information
  // Send user an OTP
}