import { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren) {
  return <div className="bg-gray h-screen text-black px-4 md:px-0">{children}</div>
}