'use server'

import { redirect } from 'next/navigation';
import { z } from 'zod'

import { reset } from '@/steps';

const schema = z.object({
  otp: z.array(z.coerce.number().min(0).max(9)).length(4),
});

export async function verifyOTP(prevState: unknown, formData: FormData) {
  const dictionary = {
    otp: formData.getAll('otp[]')
  }

  const { error, data } = schema.safeParse(dictionary);

  if (!!error) {
    return error.flatten().fieldErrors
  }

  // Mocked OTP implementation
  const mockOtp = '1234';

  if (data.otp.join('') !== mockOtp) {
    return { errors: { otp: 'Invalid otp' } }
  }

  await reset();

  redirect('/welcome');
}