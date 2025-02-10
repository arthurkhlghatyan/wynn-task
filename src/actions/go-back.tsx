'use server'

import { moveStep } from '../steps'

export async function goBack() {
  await moveStep('back');
}