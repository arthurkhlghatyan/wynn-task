import { sendOTP } from "@/actions/send-otp";
import { Form } from "@/components/form";
import { WizardSection } from "@/components/wizard-section";
import { BackButton } from "@/components/back-button";
import { SubmitButton } from "@/components/submit-button";

export function SendOTP() {
  return (
    <Form action={sendOTP}>
      <WizardSection title="OTP Verification">
        Section content
      </WizardSection>
      <BackButton />
      <SubmitButton />
    </Form>
  );
}