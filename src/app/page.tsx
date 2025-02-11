import { cookies } from "next/headers";
import { PersonalInfo } from "../steps/personal-info";
import { SendOTP } from '../steps/send-otp';
import { VerifyOTP } from '../steps/verify-otp';

import { Steps } from '@/steps';
import { Main } from "@/components/main";


export default async function Home() {
  const cookieStore = await cookies();

  const stepCookie = cookieStore.get("step");

  const step = !!stepCookie ? stepCookie.value : Steps.PersonalInfo;

  return (
    <Main>
      <h1>Registration</h1>
      <h2>Step {step} of 3</h2>
      {step === Steps.PersonalInfo && <PersonalInfo />}
      {step === Steps.SendOTP && <SendOTP />}
      {step === Steps.VerifyOTP && <VerifyOTP />}
    </Main>
  );
}
