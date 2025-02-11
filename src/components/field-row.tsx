import { PropsWithChildren } from "react";

type Props = {
  cols?: number;
}

export function FieldRow({ cols = 2, children }: PropsWithChildren<Props>) {
  return (
    <div className={`grid grid-cols-${cols} gap-6`}>{children}</div>
  );
}