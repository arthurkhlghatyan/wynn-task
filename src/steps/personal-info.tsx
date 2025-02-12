import { createUser } from "@/actions/create-user";
import { WizardSection } from '@/components/wizard-section';
import { FieldRow } from '@/components/field-row';
import { Field } from '@/components/field';
import { Input } from '@/components/input';
import { Select, Option } from '@/components/select';
import { PhoneInput } from '@/components/phone-input';
import { Checkbox } from "@/components/checkbox";
import { TermsText } from '@/components/terms-text';
import { SubmitButton } from "@/components/submit-button";

import countriesInJson from '@/countries.json'

const countries: Option[] = countriesInJson.map((country) => ({
  value: country.abbreviation,
  label: country.country
}));

const genders: Option[] = [
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'female',
    label: 'Female'
  }
];

export function PersonalInfo() {
  return (
    <form action={createUser}>
      <WizardSection title="Personal Info">
        <FieldRow>
          <Field id="firstName" label="First Name" info="Enter first name..." required>
            <Input name="firstName" required autoComplete="off" placeholder="Enter first name..." />
          </Field>
          <Field id="lastName" label="Last Name" info="Enter last name..." required>
            <Input name="lastName" required autoComplete="off" placeholder="Enter last name..." />
          </Field>
        </FieldRow>
        <Field id="gender" label="Gender" info="Select gender..." required>
          <Select name="gender" required placeholder="Select gender..." options={genders} />
        </Field>
        <Field id="residenceCountry" label="Your Residence Country" info="Select residence country..." required>
          <Select name="residenceCountry" required placeholder="Select residence country..." options={countries} />
        </Field>
      </WizardSection>
      <WizardSection title="Contact Details">
        <Field id="email" label="Email" info="Enter email address..." required>
          <Input name="email" required autoComplete="off" placeholder="Enter email address..." />
        </Field>
        <Field id="phoneNumber" label="Phone Number" info="+971 (__) - ____" required>
          <PhoneInput name="phoneNumber" autoComplete="off" required placeholder="Enter your phone number..." />
        </Field>
        <Checkbox>
          <TermsText />
        </Checkbox>
      </WizardSection>
      <SubmitButton />
    </form>
  );
}