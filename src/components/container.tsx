import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto pt-12 max-w-2xl">
      {children}
    </div>
  );
}