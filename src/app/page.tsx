import { cookies } from 'next/headers';
import { PersonalInfo } from '../steps/personal-info';
import { SendOTP } from '../steps/send-otp';
import { VerifyOTP } from '../steps/verify-otp';

import { Steps } from '@/steps';
import { Main } from '@/components/main';
import { Container } from '@/components/container';
import { WizardHeader } from '@/components/wizard-header';

export default async function Home() {
  const cookieStore = await cookies();

  const stepCookie = cookieStore.get('step');

  const step = !!stepCookie ? stepCookie.value : Steps.PersonalInfo;

  return (
    <Main>
      <Container>
        <WizardHeader title="Registration" current={Number(step)} total={3} />
        {step === Steps.PersonalInfo && <PersonalInfo />}
        {step === Steps.SendOTP && <SendOTP />}
        {step === Steps.VerifyOTP && <VerifyOTP />}
      </Container>
    </Main>
  );
}
