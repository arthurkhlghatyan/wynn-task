import { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren) {
  return <div className="bg-gray h-screen">{children}</div>
}