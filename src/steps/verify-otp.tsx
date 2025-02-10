import { verifyOTP } from "@/actions/verify-otp";
import { BackButton } from "@/components/back-button";
import { SubmitButton } from "@/components/submit-button";

export function VerifyOTP() {
  return (
    <form action={verifyOTP}>
      Verify OTP
      <BackButton />
      <SubmitButton />
    </form>
  );
}