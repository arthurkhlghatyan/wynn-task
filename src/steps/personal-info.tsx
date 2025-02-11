import { createUser } from "@/actions/create-user";
import { WizardSection } from '@/components/wizard-section';
import { Field } from '@/components/field';
import { SubmitButton } from "@/components/submit-button";

export function PersonalInfo() {
  return (
    <form action={createUser}>
      <WizardSection title="Personal Info">
        <Field id="firstName" label="First Name" info="Your first name" required />
      </WizardSection>
      <WizardSection title="Contact Details">
        Section content
      </WizardSection>
      <SubmitButton />
    </form>
  );
}