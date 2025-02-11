import { sendOTP } from "@/actions/send-otp";
import { WizardSection } from "@/components/wizard-section";
import { BackButton } from "@/components/back-button";
import { SubmitButton } from "@/components/submit-button";

export function SendOTP() {
  return (
    <form action={sendOTP}>
      <WizardSection title="OTP Verification">
        Section content
      </WizardSection>
      <BackButton />
      <SubmitButton />
    </form>
  );
}