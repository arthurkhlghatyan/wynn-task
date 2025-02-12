'use client'

import { FormEvent, startTransition, useActionState } from "react";
import { sendOTP } from "@/actions/send-otp";
import { Form } from "@/components/form";
import { WizardSection } from "@/components/wizard-section";
import { FieldRow } from "@/components/field-row";
import { BackButton } from "@/components/back-button";
import { SubmitButton } from "@/components/submit-button";

const initialState = {
  errors: null
}

export function SendOTP() {
  const [, formAction] = useActionState(sendOTP, initialState);

  // In the new versions of React action trigger resets input values
  // But we need them to be preserved in case there are validation errors
  // However we still want to support progressive enhancement so custom
  // onSubmit handler will be used combined with action prop as a fallback
  const withJavaScriptOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => formAction(new FormData(e.currentTarget)));
  }

  return (
    <Form action={formAction} onSubmit={withJavaScriptOnSubmit}>
      <WizardSection title="OTP Verification">
        Section content
      </WizardSection>
      <FieldRow>
        <BackButton fullWidth />
        <SubmitButton fullWidth />
      </FieldRow>
    </Form>
  );
}