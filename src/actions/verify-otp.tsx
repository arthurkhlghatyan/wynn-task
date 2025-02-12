'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';

import { reset } from '@/steps';

const schema = z.object({
  otp: z.array(z.coerce.number().min(0).max(9)).length(4),
});

export async function verifyOTP(prevState: unknown, formData: FormData) {
  const dictionary = {
    otp: formData.getAll('otp[]'),
  };

  const { error, data } = schema.safeParse(dictionary);

  if (!!error) {
    return { message: 'Invalid otp. Try another number or resend.' };
  }

  // Mocked OTP implementation
  const mockOtp = '1234';

  if (data.otp.join('') !== mockOtp) {
    return { message: 'Invalid otp. Try another number or resend.' };
  }

  await reset();

  redirect('/welcome');

  // To suppress typescript error
  return { message: null };
}
