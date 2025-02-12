import { PropsWithChildren } from "react";
import { sen } from '@/fonts';

export function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p aria-live="polite" className={`text-red ${sen.className}`} role="status">{children}</p>
  );
}