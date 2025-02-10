import { verifyOTP } from "@/app/actions/verify-otp";
import { SubmitButton } from "@/app/components/submit-button";

export function VerifyOTP() {
  return (
    <form action={verifyOTP}>
      <SubmitButton />
    </form>
  );
}