import { sendOTP } from "@/actions/send-otp";
import { BackButton } from "@/components/back-button";
import { SubmitButton } from "@/components/submit-button";

export function SendOTP() {
  return (
    <form action={sendOTP}>
      Send OTP
      <BackButton />
      <SubmitButton />
    </form>
  );
}