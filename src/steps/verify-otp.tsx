'use client';

import { FormEvent, startTransition, useActionState, useRef } from 'react';
import { verifyOTP } from '@/actions/verify-otp';
import { FormWithRef } from '@/components/form';
import { WizardSection } from '@/components/wizard-section';
import { FieldRow } from '@/components/field-row';
import { AuthWizardStage } from '@/components/auth-wizard-stage';
import { BackButton } from '@/components/back-button';
import { SubmitButton } from '@/components/submit-button';
import { OTPInput } from '@/components/otp-input';

const initialState = {
  errors: null,
};

export function VerifyOTP() {
  const [, formAction] = useActionState(verifyOTP, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // In the new versions of React action trigger resets input values
  // But we need them to be preserved in case there are validation errors
  // However we still want to support progressive enhancement so custom
  // onSubmit handler will be used combined with action prop as a fallback
  const withJavaScriptOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => formAction(new FormData(e.currentTarget)));
  };

  const handleComplete = () => {
    if (formRef.current) {
      startTransition(() =>
        formAction(new FormData(formRef.current as HTMLFormElement))
      );
    }
  };

  const handleResend = () => {
    console.log('resend');
  };

  return (
    <FormWithRef
      ref={formRef}
      action={formAction}
      onSubmit={withJavaScriptOnSubmit}
    >
      <WizardSection title="OTP Verification">
        <AuthWizardStage
          title="Please check your email."
          description="We've sent a code to anton@gmail.com"
        >
          <OTPInput
            name="otp[]"
            onComplete={handleComplete}
            onResend={handleResend}
          />
        </AuthWizardStage>
      </WizardSection>
      <FieldRow>
        <BackButton fullWidth />
        <SubmitButton fullWidth />
      </FieldRow>
    </FormWithRef>
  );
}
