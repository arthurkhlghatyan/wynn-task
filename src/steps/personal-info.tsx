import { createUser } from "@/actions/create-user";
import { WizardSection } from '@/components/wizard-section';
import { Field } from '@/components/field';
import { Input } from '@/components/input';
import { SubmitButton } from "@/components/submit-button";

export function PersonalInfo() {
  return (
    <form action={createUser}>
      <WizardSection title="Personal Info">
        <Field id="firstName" label="First Name" info="Enter first name..." required>
          <Input name="firstName" required autoComplete="off" placeholder="Enter first name..." />
        </Field>
        <Field id="lastName" label="Last Name" info="Enter last name..." required>
          <Input name="firstName" required autoComplete="off" placeholder="Enter last name..." />
        </Field>
      </WizardSection>
      <WizardSection title="Contact Details">
        Section content
      </WizardSection>
      <SubmitButton />
    </form>
  );
}