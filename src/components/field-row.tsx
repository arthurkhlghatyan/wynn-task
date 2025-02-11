import { PropsWithChildren } from "react";

export function FieldRow({ children }: PropsWithChildren) {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-6">{children}</div>
  );
}