import { createUser } from "@/actions/create-user";
import { WizardSection } from '@/components/wizard-section';
import { SubmitButton } from "@/components/submit-button";

export function PersonalInfo() {
  return (
    <form action={createUser}>
      <WizardSection title="Personal Info">
        Section content
      </WizardSection>
      <WizardSection title="Contact Details">
        Section content
      </WizardSection>
      <SubmitButton />
    </form>
  );
}