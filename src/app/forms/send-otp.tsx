import { sendOTP } from "@/app/actions/send-otp";
import { SubmitButton } from "@/app/components/submit-button";

export function SendOTP() {
  return (
    <form action={sendOTP}>
      <SubmitButton />
    </form>
  );
}