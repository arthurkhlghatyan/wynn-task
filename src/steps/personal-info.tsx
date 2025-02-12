'use client';

import { FormEvent, startTransition, useActionState } from 'react';
import { createUser } from '@/actions/create-user';
import { Form } from '@/components/form';
import { WizardSection } from '@/components/wizard-section';
import { FieldRow } from '@/components/field-row';
import { Field } from '@/components/field';
import { Input } from '@/components/input';
import { Select, Option } from '@/components/select';
import { PhoneInput } from '@/components/phone-input';
import { Checkbox } from '@/components/checkbox';
import { TermsText } from '@/components/terms-text';
import { SubmitButton } from '@/components/submit-button';

import countriesInJson from '@/countries.json';

const countries: Option[] = countriesInJson.map((country) => ({
  value: country.abbreviation,
  label: country.country,
}));

const genders: Option[] = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
];

const initialState = {
  errors: null,
};

export function PersonalInfo() {
  const [, formAction] = useActionState(createUser, initialState);

  // In the new versions of React action trigger resets input values
  // But we need them to be preserved in case there are validation errors
  // However we still want to support progressive enhancement so custom
  // onSubmit handler will be used combined with action prop as a fallback
  const withJavaScriptOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => formAction(new FormData(e.currentTarget)));
  };

  return (
    <Form action={formAction} onSubmit={withJavaScriptOnSubmit}>
      <WizardSection title="Personal Info">
        <FieldRow>
          <Field
            id="firstName"
            label="First Name"
            info="Enter first name..."
            required
          >
            <Input
              name="firstName"
              required
              autoComplete="off"
              placeholder="Enter first name..."
            />
          </Field>
          <Field
            id="lastName"
            label="Last Name"
            info="Enter last name..."
            required
          >
            <Input
              name="lastName"
              required
              autoComplete="off"
              placeholder="Enter last name..."
            />
          </Field>
        </FieldRow>
        <Field id="gender" label="Gender" info="Select gender..." required>
          <Select
            name="gender"
            required
            placeholder="Select gender..."
            options={genders}
          />
        </Field>
        <Field
          id="residenceCountry"
          label="Your Residence Country"
          info="Select residence country..."
          required
        >
          <Select
            name="residenceCountry"
            required
            placeholder="Select residence country..."
            options={countries}
          />
        </Field>
      </WizardSection>
      <WizardSection title="Contact Details">
        <Field id="email" label="Email" info="Enter email address..." required>
          <Input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Enter email address..."
          />
        </Field>
        <Field
          id="phoneNumber"
          label="Phone Number"
          info="+971 (__) - ____"
          required
        >
          <PhoneInput
            name="phoneNumber"
            autoComplete="off"
            required
            placeholder="Enter your phone number..."
          />
        </Field>
        <Checkbox required>
          <TermsText />
        </Checkbox>
      </WizardSection>
      <SubmitButton />
    </Form>
  );
}
