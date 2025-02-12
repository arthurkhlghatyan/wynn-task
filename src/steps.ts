import { cookies } from 'next/headers';

export enum Steps {
  PersonalInfo = '1',
  SendOTP = '2',
  VerifyOTP = '3',
}

export async function moveStep(direction: 'back' | 'next') {
  const cookieStore = await cookies();
  const stepCookie = cookieStore.get('step');

  const step = !!stepCookie ? Number(stepCookie.value) : 1;

  cookieStore.set('step', String(direction === 'back' ? step - 1 : step + 1));
}

export async function reset() {
  const cookieStore = await cookies();

  cookieStore.delete('step');
}
