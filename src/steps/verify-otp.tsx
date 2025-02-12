import { verifyOTP } from "@/actions/verify-otp";
import { Form } from "@/components/form";
import { WizardSection } from "@/components/wizard-section";
import { BackButton } from "@/components/back-button";
import { SubmitButton } from "@/components/submit-button";

export function VerifyOTP() {
  return (
    <Form action={verifyOTP}>
      <WizardSection title="OTP Verification">
        Section content
      </WizardSection>
      <BackButton />
      <SubmitButton />
    </Form>
  );
}